import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { FaChevronRight, FaLightbulb, FaUsers, FaShieldAlt, FaPencilAlt } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-serif font-bold gold-gradient-text mb-4">关于我们</h1>
              <p className="text-xl text-gray-300">
                了解人生剧本生成器背后的理念、团队和技术
              </p>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-serif text-white mb-8">我们的理念</h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                人生剧本生成器诞生于一个简单而深刻的想法：每个人的生命都是一个独特的故事，
                充满了无限的可能性。我们相信，通过深入了解一个人的经历、性格和梦想，
                可以为其创造一个富有启发性的人生蓝图，帮助其发现自身的潜能和未来的可能性。
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                我们不是算命先生，也不声称能够精确预测未来。相反，我们是故事的探索者和可能性的创造者。
                我们利用人工智能和心理学的结合，为每个人创造一个个性化的人生剧本，
                作为自我探索和个人成长的工具。
              </p>
              
              <h2 className="text-3xl font-serif text-white mb-8">核心价值</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 black-gold-gradient rounded-lg">
                  <div className="text-primary-gold text-3xl mb-4">
                    <FaLightbulb />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">启发与洞察</h3>
                  <p className="text-gray-300">
                    我们相信每个人都拥有巨大的潜能，但有时需要外部的视角和启发。
                    我们的人生剧本旨在提供新的视角，帮助您发现自己的隐藏天赋和未开发的可能性。
                  </p>
                </div>
                
                <div className="p-6 black-gold-gradient rounded-lg">
                  <div className="text-primary-gold text-3xl mb-4">
                    <FaUsers />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">个性化体验</h3>
                  <p className="text-gray-300">
                    我们相信每个人都是独特的，所以每份剧本都是完全个性化的。
                    我们拒绝使用模板或通用解决方案，而是根据您的具体情况创作专属内容。
                  </p>
                </div>
                
                <div className="p-6 black-gold-gradient rounded-lg">
                  <div className="text-primary-gold text-3xl mb-4">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">隐私与安全</h3>
                  <p className="text-gray-300">
                    我们尊重您的隐私，所有提供的个人信息仅用于创作剧本，不会用于其他商业目的或与第三方共享。
                    您的数据安全是我们的首要考虑。
                  </p>
                </div>
                
                <div className="p-6 black-gold-gradient rounded-lg">
                  <div className="text-primary-gold text-3xl mb-4">
                    <FaPencilAlt />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">艺术与科学</h3>
                  <p className="text-gray-300">
                    我们的方法结合了艺术的创造性和科学的严谨性。
                    我们使用先进的AI技术，同时注入人文关怀和创意思维，创造既有深度又有美感的内容。
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-serif text-white mb-8">我们的技术</h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                人生剧本生成器利用先进的自然语言处理技术和深度学习算法，分析用户提供的信息，
                创建具有连贯性和洞察力的个性化内容。我们的系统不断学习和改进，
                确保每一份剧本都是独特的艺术作品。
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                我们的团队由AI专家、作家、心理学家和设计师组成，共同努力打造这个独特的创意平台。
                我们相信技术与人文的结合，可以创造出更有意义、更能触动人心的内容。
              </p>
              
              <div className="text-center mt-12">
                <p className="text-xl text-primary-gold mb-6">准备好创作自己的人生剧本了吗？</p>
                <Link 
                  href="/create" 
                  className="gold-button inline-flex items-center"
                >
                  开始创作 <FaChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
} 