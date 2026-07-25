import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  serverExternalPackages: [
    'undici',
    'payload',
    '@payloadcms/storage-vercel-blob',
    'react-image-crop',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
      {
        pathname: '/**',
      },
    ],
  },
  webpack: (webpackConfig, { isServer }) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    // Add CSS loader to handle CSS imports in server-side builds
    webpackConfig.module = webpackConfig.module || {}
    webpackConfig.module.rules = webpackConfig.module.rules || []

    if (isServer) {
      webpackConfig.module.rules.push({
        test: /\.css$/,
        use: 'null-loader',
      })
    }

    // Add plugin to handle node: protocol and block server-only imports on client
    webpackConfig.plugins = webpackConfig.plugins || []

    if (!isServer) {
      const webpack = require('webpack')

      // Block entire problem packages on client side
      webpackConfig.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@payloadcms\/(storage-vercel-blob|plugin-cloud-storage)/,
          path.resolve(dirname, 'src/lib/VercelBlobClientUploadHandlerStub.tsx'),
        ),
      )
    }

    webpackConfig.plugins.push({
      apply(compiler: any) {
        compiler.hooks.normalModuleFactory.tap('NodeProtocolPlugin', (nmf: any) => {
          nmf.hooks.beforeResolve.tap('NodeProtocolPlugin', (resolveData: any) => {
            if (resolveData.request.startsWith('node:')) {
              const moduleName = resolveData.request.slice(5)
              resolveData.request = moduleName
            }
          })
        })
      },
    })

    // Apply these fallbacks strictly when bundling for the browser client
    if (!isServer) {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        // Block standard server module errors
        assert: false,
        worker_threads: false,
        fs: false,
        stream: false,
        crypto: false,
        path: false,
        os: false,
        util: false,
        'util/types': false,
        buffer: false,
        process: false,
        async_hooks: false,
        http: false,
        https: false,
        net: false,
        tls: false,
        zlib: false,
        dns: false,
        sqlite: false,
        sqlite3: false,
        child_process: false,
        module: false,
        diagnostics_channel: false,
        console: false,

        // Block package-level browser bundle leaks
        'pino-pretty': false,
        undici: false,
      }
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
