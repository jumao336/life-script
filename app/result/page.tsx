import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScriptResult from '../components/ScriptResult'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function ResultPage() {
  return (
    <>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/create" 
          className="inline-flex items-center text-primary-gold hover:text-secondary-gold transition-colors mb-8"
        >
          <FaArrowLeft className="mr-2" /> 返回编辑
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold gold-gradient-text mb-4">您的专属人生剧本</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            根据您提供的信息，我们为您创作了以下专属人生剧本。
            您可以查看完整内容、性格分析和未来发展路径。
          </p>
        </div>
      </div>
      
      <ScriptResult />
      <Footer />
    </>
  )
} 