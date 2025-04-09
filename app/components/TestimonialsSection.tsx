import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

type TestimonialProps = {
  quote: string,
  author: string,
  role: string,
  avatar: string,
  rating: number
}

function Testimonial({ quote, author, role, avatar, rating }: TestimonialProps) {
  return (
    <div className="p-6 black-gold-gradient rounded-lg">
      <div className="flex text-primary-gold mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? "text-primary-gold" : "text-gray-600"}
          />
        ))}
      </div>
      
      <p className="text-gray-300 mb-6 italic">"{quote}"</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-primary-gold/30">
          <Image 
            src={avatar} 
            alt={author} 
            width={48} 
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        
        <div>
          <h4 className="text-white font-bold">{author}</h4>
          <p className="text-primary-gold text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "人生剧本超出了我的预期，它让我看到了自己从未想象过的可能性。这不仅仅是一份文档，更像是一面镜子，让我重新认识自己。",
      author: "张明",
      role: "企业家",
      avatar: "/avatars/user1.jpg",
      rating: 5
    },
    {
      quote: "我收到的人生剧本仿佛是为我量身定制的，里面的洞察让我惊讶不已。这帮助我重新规划了职业道路，找到了真正的激情所在。",
      author: "王丽",
      role: "市场总监",
      avatar: "/avatars/user2.jpg",
      rating: 5
    },
    {
      quote: "起初我很怀疑这个服务能提供什么价值，但结果让我完全改变了看法。人生剧本深度分析了我的性格和潜能，给了我明确的方向。",
      author: "李强",
      role: "软件工程师",
      avatar: "/avatars/user3.jpg",
      rating: 4
    }
  ]
  
  return (
    <section className="py-20 bg-secondary-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold gold-gradient-text mb-4">用户评价</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            看看其他人是如何通过我们的人生剧本服务获得启发和指引的。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 