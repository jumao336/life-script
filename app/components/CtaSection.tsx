import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary-gold/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            <span className="gold-gradient-text">开始您的</span>
            <br />
            <span className="text-white">人生剧本之旅</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            今天就开始创作您独特的人生故事，发掘隐藏的潜能，探索全新的可能性。
            无论您是寻找方向、转变生活，还是寻求灵感，我们的人生剧本将为您带来启示。
          </p>
          
          <Link 
            href="/create" 
            className="gold-button text-lg flex items-center justify-center gap-2 mx-auto w-fit"
          >
            立即创建您的人生剧本 <FaChevronRight />
          </Link>
        </div>
      </div>
    </section>
  )
} 