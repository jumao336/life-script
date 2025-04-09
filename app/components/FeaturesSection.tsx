import { FaFeather, FaBook, FaLightbulb, FaUserAlt } from 'react-icons/fa'

type FeatureProps = {
  icon: React.ReactNode,
  title: string,
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="p-6 black-gold-gradient rounded-lg transition-transform hover:-translate-y-1 duration-300">
      <div className="text-primary-gold text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaFeather />,
      title: "独特个性化",
      description: "每一份剧本都是独一无二的，根据您的个人信息精心定制，不会有雷同的故事。"
    },
    {
      icon: <FaBook />,
      title: "多元化故事线",
      description: "包含各种不同的人生可能性，探索您在不同选择下的人生道路。"
    },
    {
      icon: <FaLightbulb />,
      title: "深度洞察",
      description: "揭示您性格特点和潜能的独特分析，帮助您更好地认识自己。"
    },
    {
      icon: <FaUserAlt />,
      title: "个人成长",
      description: "提供有关如何实现个人目标和梦想的实用建议，助您成长。"
    }
  ]
  
  return (
    <section className="py-20 bg-secondary-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold gold-gradient-text mb-4">我们的特色</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            发掘您生命中的无限可能，通过定制化的人生剧本，重新想象您的未来。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  )
} 