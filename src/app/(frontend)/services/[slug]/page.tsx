import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPayloadHMR } from '@paylies'
import config from '@payload-config'
import type { Service } from '@/payload-types'

export async function genera) {
  const payload = await getPayloadHg })
 d.find({
,
    limit: 100,
  })


    slug: service.slug,
  }))
}

expo) {

  const services = await payload.f{

    where: { slug: { equa},

  })

  const service = services.docs[0] as Service

  }

  return {
    title: `${service.title} | 
    description: service.shortDescription,
  }
}

export default async function ServiceD}) {
  const paylo})
  cod({
ervices',
    where: { slug: { equals: paramg } },
: 1,
  })

  cce

  if (!ser {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section class>
        {service.heroImage && typeof se
          <div className="absolute 
            <Image
              src={service.''}
              alt={service.heroImage.e}
              fil
              clasty-20"
            />
          </div>
        )}
        <div c-4xl">
          <h1 cl
n}</p>
        </div>
      </section>

      {/* Description Section */}
      {service.fullDescription && (
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: service.fullDescription as any }}
          />
        </section
      )}

      {/* Key Feat */}
      {s

          <div className="max-o">
            <h2 className="text-4xl
            <div className="grid md:grid-cols-2 lg:grid-co>
              {service.keyFeatures.map((item, inde
                
                  <h3 className="text-xl font-semib>
                  {item.description && <p className="text-gray-700">{item.d
              v>
              ))}
            </div>
        div>
ection>
      )}

      {/* Process Steps */}
      {service.process && service.process.len
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Pcess</h2>
            <div className="space-y-8">
              {service.process
                .sort((a, b) => (a.stepNumber || 0) - (b.stepNumber || 0))
                .map(( (
                 >
                  
                er}
                  
        
>
                     }
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits & (
        <section className="py-20 px-4 bg-
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Benefis</h2>
            <ul classNamy-4">
              {service => (
                <">
                   20">
                >
                  svg>
        >
                </li>
   
 ul>

  )
}
>>
    </divsection
      </   </div>
         </Link>     }
 Get Started'taText || '.c  {service                 >
 n"
  ioit00 transbg-gray-1hover:ld text-lg mibo font-serounded-lgx-8 py-4 0 pt-orange-60-white texck bgloline-bme="in   classNa       t'}
  contactaLink || '/ce.cref={servi          h   <Link
  >
       e</po lifsion tring your viet's b">Lb-8xt-xl me="telassNam    <p c
      </h2>tarted? to get seadyld mb-6">Rxl font-bo"text-42 className=<h         auto">
 -3xl mx-me="max-wassNav cldi
        <">itetext-whorange-600 ange-500 to--oromto-br frient-er bg-gradtext-cent4 px-="py-20 className  <section */}
    TA Section       {/* C}


      )section>     </
   </div>          