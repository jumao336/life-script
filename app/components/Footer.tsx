import Link from 'next/link'
import { FaEnvelope, FaPhone, FaIdCard } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-black/70 backdrop-blur-md border-t border-primary-gold/20 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section">
            <h3 className="text-xl font-bold text-primary-gold mb-4">关于我们</h3>
            <p className="text-gray-300 mb-4">
              人生剧本生成器致力于帮助人们探索人生的无限可能性，发现自我价值，实现个人成长。
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="text-xl font-bold text-primary-gold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-gold transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-gold transition-colors">
                  关于
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-gray-300 hover:text-primary-gold transition-colors">
                  示例
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-gold transition-colors">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-gold transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="text-xl font-bold text-primary-gold mb-4">联系方式</h3>
            <div className="space-y-2">
              <a href="mailto:contact@lifescript.com" className="flex items-center text-gray-300 hover:text-primary-gold transition-colors">
                <FaEnvelope className="mr-2 text-primary-gold" />
                contact@lifescript.com
              </a>
              <a href="tel:+86123456789" className="flex items-center text-gray-300 hover:text-primary-gold transition-colors">
                <FaPhone className="mr-2 text-primary-gold" />
                +86 123 456 789
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-primary-gold transition-colors">
                <FaIdCard className="mr-2 text-primary-gold" />
                社交媒体
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-500">
          <p>© {currentYear} 人生剧本生成器. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
} 