"use client"

import { useState } from 'react'
import { FaBookOpen, FaUserCircle, FaChartLine, FaDownload, FaShareAlt } from 'react-icons/fa'

enum TabType {
  SCRIPT = 'script',
  ANALYSIS = 'analysis',
  FUTURE = 'future'
}

export default function ScriptResult() {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.SCRIPT);
  
  // 这些内容在实际应用中会从API获取
  const resultData = {
    userName: '张明',
    scriptTitle: '无限可能的探索者',
    scriptContent: `
      第一章：早年的探索（1990-2010）
      
      张明出生在一个普通的家庭，从小就展现出对科技的强烈好奇心。他总是拆开家里的电子设备，尝试理解它们的工作原理。尽管这些尝试常常以失败告终，但每一次失败都成为了他学习的机会。
      
      在学校里，张明并不是最出色的学生，但他对计算机和数学有着非凡的热情。高中时期，他开发了自己的第一个小游戏，虽然简陋，却获得了老师和同学们的赞赏。这次经历坚定了他追求计算机科学的决心。
      
      大学期间，张明选择了计算机科学专业。他不仅专注于课程学习，还积极参与各种编程竞赛和开源项目。这段时期，他结识了许多志同道合的朋友，他们一起讨论技术，分享知识，共同成长。
      
      第二章：职业生涯的起步（2010-2015）
      
      大学毕业后，张明加入了一家初创公司，担任软件工程师。在这里，他面临了许多挑战，但也获得了宝贵的实战经验。他工作勤奋，经常加班钻研新技术，很快就成为了团队中的技术骨干。
      
      然而，初创公司的不稳定性也给张明带来了不少压力。公司几经波折，最终在他工作两年后倒闭。这次失败让张明深刻认识到，仅有技术实力是不够的，他还需要了解商业运作和市场需求。
      
      带着这些思考，张明加入了一家大型科技公司。在这里，他不仅提升了自己的技术能力，还学习了项目管理和团队协作的重要性。他逐渐从一个纯粹的技术人员成长为能够统筹全局的项目负责人。
      
      第三章：转折与成长（2015-2020）
      
      2015年，张明面临人生的重要抉择。他可以继续在大公司稳步发展，也可以再次冒险创业。经过深思熟虑，他选择了后者，与两位志同道合的朋友共同创立了一家专注于人工智能解决方案的公司。
      
      创业初期充满艰辛，他们面临资金短缺、人才竞争和市场拓展等多重挑战。张明常常工作到深夜，既要负责技术开发，又要参与商业决策。这段经历磨练了他的意志，也让他学会了在压力下保持冷静和清晰的思考。
      
      经过不懈努力，他们的公司逐渐站稳脚跟，并在特定领域建立了自己的品牌影响力。2019年，他们成功获得了一轮重要的风险投资，这不仅解决了资金问题，还让公司能够吸引更多优秀人才加入。
      
      第四章：成功与挑战（2020-2025）
      
      随着公司规模的扩大，张明的角色也在不断变化。他从最初的技术负责人逐渐转变为公司的首席技术官，需要制定长远的技术战略和方向。这个转变并不容易，他不得不减少亲自编码的时间，转而更多地关注团队建设和技术规划。
      
      2022年，全球科技行业遭遇寒冬，许多公司被迫裁员或关闭。张明带领的公司也面临严峻考验。在这个关键时刻，他做出了削减非核心业务、聚焦核心竞争力的决策，使公司成功度过了危机，并在行业复苏时期抢占了有利位置。
      
      这段经历让张明认识到，成功不仅需要技术创新，还需要战略眼光和经受挫折的能力。他开始更加注重自身的全面发展，不断学习新知识，拓展自己的视野和格局。
    `,
    analysisContent: `
      基于您提供的信息，我们对您的性格和潜能进行了深入分析：
      
      核心性格特质：
      
      独立性强：您喜欢自主思考和决策，有较强的自我管理能力。
      富有创造力：您擅长提出新颖的想法和解决方案，思维灵活。
      韧性佳：面对挫折能够保持积极态度，并从中学习成长。
      分析思维：您善于逻辑分析和系统思考，能够看清问题本质。
      谨慎决策：在重大决策前喜欢全面考虑各种因素，不冒然行动。
      
      隐藏潜能：
      
      领导才能：虽然您更倾向于专注技术领域，但实际上具备出色的领导潜质。
      跨领域创新：您有能力将不同领域的知识融合，创造独特的价值。
      教育培养：您在知识传授和培养人才方面有特殊天赋。
      战略规划：您的思维不仅适合解决技术问题，也适合制定长期战略。
      
      发展建议：
      
      持续学习：技术领域变化迅速，保持学习的习惯对您至关重要。
      拓展人脉：有意识地建立跨行业的人际网络，可以为您带来更多机会。
      平衡发展：技术专长是您的核心优势，但也要注重管理和商业能力的提升。
      健康生活：保持身心健康的平衡，避免过度工作导致的倦怠。
      定期反思：每隔一段时间审视自己的目标和成长，进行必要的调整。
    `,
    futureContent: `
      根据您的性格特点、经历和目标，我们预测了几种可能的未来发展路径：
      
      路径一：科技创业领袖
      
      您的公司在人工智能领域继续深耕，逐步成长为行业领导者。您作为创始人之一，将成为备受尊敬的科技企业家，影响整个行业的发展方向。未来5-10年，您可能会带领公司完成上市，实现商业上的巨大成功。
      
      与此同时，您会越来越关注技术如何改变社会，积极参与行业标准的制定和政策讨论。您的影响力将超越公司范畴，成为连接技术与社会的重要桥梁。
      
      路径二：技术创新者
      
      您可能会选择回归技术本身，深入研究您最感兴趣的领域。在保持公司稳定发展的同时，您会拿出一部分时间进行创新研究，推动技术边界的扩展。
      
      这条路径上，您可能会成为某个专业领域的权威专家，发表有影响力的论文或专利，甚至创立新的技术分支。您的成就将不仅限于商业成功，还包括对人类知识的重要贡献。
      
      路径三：教育与传承
      
      随着经验的积累，您可能会发现自己在培养新一代技术人才方面有特殊的热情和才能。您可能会选择投入更多精力在教育领域，例如创办科技培训机构、担任大学客座教授或指导年轻创业者。
      
      在这条路径上，您的影响力将通过您培养的学生和创业者延续下去，形成持久的行业影响。您也会从教学过程中获得新的灵感和满足感。
      
      路径四：跨界创新
      
      您丰富的技术背景和商业经验，使您有条件将技术应用到全新的领域。您可能会探索科技与其他行业（如医疗、教育、环保等）的交叉点，开创全新的商业模式。
      
      这条路径充满挑战但也蕴含巨大机遇。您可能需要学习全新的行业知识，但也有机会解决一些社会上最紧迫的问题，创造广泛的社会价值。
    `
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case TabType.SCRIPT:
        return (
          <div className="prose prose-invert max-w-none">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-serif gold-gradient-text">{resultData.scriptTitle}</h1>
              <p className="text-gray-400">为 {resultData.userName} 定制的人生剧本</p>
            </div>
            
            <div className="text-gray-300 whitespace-pre-line">
              {resultData.scriptContent}
            </div>
          </div>
        );
      
      case TabType.ANALYSIS:
        return (
          <div className="prose prose-invert max-w-none">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-serif gold-gradient-text">性格与潜能分析</h1>
            </div>
            
            <div className="text-gray-300 whitespace-pre-line">
              {resultData.analysisContent}
            </div>
          </div>
        );
      
      case TabType.FUTURE:
        return (
          <div className="prose prose-invert max-w-none">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-serif gold-gradient-text">未来发展路径</h1>
            </div>
            
            <div className="text-gray-300 whitespace-pre-line">
              {resultData.futureContent}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-secondary-black p-8 rounded-lg gold-border">
            {/* 标签切换栏 */}
            <div className="flex mb-8 border-b border-gray-700">
              <button 
                className={`px-6 py-3 font-medium ${
                  activeTab === TabType.SCRIPT 
                    ? 'text-primary-gold border-b-2 border-primary-gold' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab(TabType.SCRIPT)}
              >
                <FaBookOpen className="inline mr-2" />
                剧本内容
              </button>
              
              <button 
                className={`px-6 py-3 font-medium ${
                  activeTab === TabType.ANALYSIS 
                    ? 'text-primary-gold border-b-2 border-primary-gold' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab(TabType.ANALYSIS)}
              >
                <FaUserCircle className="inline mr-2" />
                性格分析
              </button>
              
              <button 
                className={`px-6 py-3 font-medium ${
                  activeTab === TabType.FUTURE 
                    ? 'text-primary-gold border-b-2 border-primary-gold' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab(TabType.FUTURE)}
              >
                <FaChartLine className="inline mr-2" />
                未来路径
              </button>
            </div>
            
            {/* 内容区域 */}
            <div className="mb-8">
              {renderTabContent()}
            </div>
            
            {/* 操作按钮 */}
            <div className="flex justify-center gap-4 mt-12">
              <button className="gold-button flex items-center gap-2">
                <FaDownload /> 下载PDF
              </button>
              
              <button className="outlined-button flex items-center gap-2">
                <FaShareAlt /> 分享
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 