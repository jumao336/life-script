import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

type ExampleCardProps = {
  title: string;
  description: string;
  image: string;
  author: string;
  slug: string;
}

function ExampleCard({ title, description, image, author, slug }: ExampleCardProps) {
  return (
    <div className="black-gold-gradient rounded-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        <p className="text-primary-gold mb-4 text-sm">为 {author} 创作</p>
        
        <Link 
          href={`/examples/${slug}`} 
          className="inline-flex items-center text-primary-gold hover:text-secondary-gold transition-colors"
        >
          查看完整剧本 <FaChevronRight className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

export default function ExamplesPage() {
  const examples = [
    {
      title: "无限可能的探索者",
      description: "一个技术爱好者如何通过不断学习和挑战自我，最终成为科技行业的领军人物。",
      image: "/examples/example1.jpg",
      author: "张明",
      slug: "explorer"
    },
    {
      title: "艺术与商业的平衡者",
      description: "一位艺术家如何在保持创作热情的同时，成功地将自己的作品商业化，影响更多的人。",
      image: "/examples/example2.jpg",
      author: "李艺",
      slug: "artist"
    },
    {
      title: "跨文化的桥梁",
      description: "一个热爱语言的人如何利用自己的特长，成为连接不同文化的使者，促进国际交流与合作。",
      image: "/examples/example3.jpg",
      author: "王国际",
      slug: "bridge"
    },
    {
      title: "教育改革者",
      description: "一位老师如何通过创新教学方法，改变传统教育模式，培养出更多具有创造力的学生。",
      image: "/examples/example4.jpg",
      author: "赵教授",
      slug: "educator"
    },
    {
      title: "健康与平衡的追求者",
      description: "一个曾经的工作狂如何重新认识生活的意义，追求身心健康的平衡，找到真正的幸福。",
      image: "/examples/example5.jpg",
      author: "孙平衡",
      slug: "balance"
    },
    {
      title: "社会创新家",
      description: "一位年轻的社会企业家如何通过创新的商业模式，解决社会问题，创造可持续的社会价值。",
      image: "/examples/example6.jpg",
      author: "吴创新",
      slug: "innovator"
    }
  ];
  
  return (
    <>
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold gold-gradient-text mb-4">剧本示例</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              浏览我们为不同背景和梦想的人创作的人生剧本示例，
              感受专属剧本的魅力和深度。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <ExampleCard
                key={index}
                title={example.title}
                description={example.description}
                image={example.image}
                author={example.author}
                slug={example.slug}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6">想要拥有属于自己的人生剧本？</p>
            <Link 
              href="/create" 
              className="gold-button inline-flex items-center"
            >
              开始创作您的专属剧本 <FaChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
} 