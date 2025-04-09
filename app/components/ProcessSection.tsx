import { FaUserEdit, FaClipboardList, FaMagic, FaFilePdf } from 'react-icons/fa'

type StepProps = {
  number: number,
  icon: React.ReactNode,
  title: string,
  description: string
}

function Step({ number, icon, title, description }: StepProps) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-primary-black border-2 border-primary-gold flex items-center justify-center text-primary-gold text-xl font-bold">
          {number}
        </div>
      </div>
      
      <div>
        <div className="text-primary-gold text-2xl mb-2">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      icon: <FaUserEdit />,
      title: "填写个人信息",
      description: "提供您的基本信息、兴趣爱好、人生目标和重要经历等详细资料。"
    },
    {
      number: 2,
      icon: <FaClipboardList />,
      title: "问卷调查",
      description: "回答一系列精心设计的问题，帮助我们深入了解您的性格特点和价值观。"
    },
    {
      number: 3,
      icon: <FaMagic />,
      title: "AI分析创作",
      description: "我们的AI系统分析您的信息，创作出符合您个性的独特人生剧本。"
    },
    {
      number: 4,
      icon: <FaFilePdf />,
      title: "剧本交付",
      description: "您将收到一份精美的人生剧本，包含多条故事线和深度分析。"
    }
  ]
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold gold-gradient-text mb-4">创作流程</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            简单四步，为您创作专属的人生剧本，展现您的过去、现在与未来可能性。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary-gold/30">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <Step 
                  key={index}
                  number={step.number}
                  icon={step.icon} 
                  title={step.title} 
                  description={step.description} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 