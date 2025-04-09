import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* 装饰背景元素 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="gold-gradient-text">定制你的</span>
            <br />
            <span className="text-white">人生剧本</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            根据您的梦想、经历和愿望，我们将为您创作一部独特的人生故事。
            发现您生命中的隐藏潜能，探索未知的可能性。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/create" 
              className="gold-button flex items-center justify-center gap-2"
            >
              开始创作 <FaChevronRight />
            </Link>
            
            <Link 
              href="/examples" 
              className="outlined-button flex items-center justify-center gap-2"
            >
              查看示例 <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 