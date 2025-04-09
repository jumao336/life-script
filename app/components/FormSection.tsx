"use client"

import { useState, useEffect } from 'react'
import { FaUser, FaCalendarAlt, FaBriefcase, FaGraduationCap, FaHeart, FaStar, FaGem, FaArrowRight, FaArrowLeft } from 'react-icons/fa'

interface FormData {
  name: string;
  birthdate: string;
  gender: string;
  occupation: string;
  education: string;
  interests: string[];
  goals: string[];
  achievements: string[];
  challenges: string[];
  personality: {
    introvert: number;
    creative: number;
    analytical: number;
    adventurous: number;
    organized: number;
  }
}

export default function FormSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthdate: '',
    gender: '',
    occupation: '',
    education: '',
    interests: [],
    goals: [],
    achievements: [],
    challenges: [],
    personality: {
      introvert: 3,
      creative: 3,
      analytical: 3,
      adventurous: 3,
      organized: 3
    }
  });
  const [fadeIn, setFadeIn] = useState(true);
  
  useEffect(() => {
    // 页面加载时的淡入效果
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleMultipleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>, field: keyof FormData) => {
    const values = e.target.value.split('\n').filter(item => item.trim() !== '');
    setFormData({
      ...formData,
      [field]: values
    });
  };
  
  const handlePersonalityChange = (trait: keyof FormData['personality'], value: number) => {
    setFormData({
      ...formData,
      personality: {
        ...formData.personality,
        [trait]: value
      }
    });
  };
  
  const nextStep = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      setFadeIn(true);
    }, 300);
  };
  
  const prevStep = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentStep(prev => Math.max(prev - 1, 1));
      setFadeIn(true);
    }, 300);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 在实际应用中，这里会将数据发送到服务器
    console.log('Form submitted:', formData);
    // 跳转到结果页面
    window.location.href = '/result';
  };
  
  const renderBasicInfo = () => (
    <div className={`space-y-6 transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <h3 className="text-2xl font-serif font-bold text-primary-gold mb-6">基本信息</h3>
      
      <div>
        <label htmlFor="name" className="block text-white mb-2 flex items-center">
          <FaUser className="mr-2 text-primary-gold" />
          姓名
        </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className="fancy-input" 
          value={formData.name} 
          onChange={handleTextChange} 
          required 
          placeholder="请输入您的姓名"
        />
      </div>
      
      <div>
        <label htmlFor="birthdate" className="block text-white mb-2 flex items-center">
          <FaCalendarAlt className="mr-2 text-primary-gold" />
          出生日期
        </label>
        <input 
          type="date" 
          id="birthdate" 
          name="birthdate" 
          className="fancy-input" 
          value={formData.birthdate} 
          onChange={handleTextChange} 
          required 
        />
      </div>
      
      <div>
        <label htmlFor="gender" className="block text-white mb-2 flex items-center">
          <FaUser className="mr-2 text-primary-gold" />
          性别
        </label>
        <select 
          id="gender" 
          name="gender" 
          className="fancy-input" 
          value={formData.gender} 
          onChange={handleTextChange} 
          required
        >
          <option value="">请选择</option>
          <option value="男">男</option>
          <option value="女">女</option>
          <option value="其他">其他</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="occupation" className="block text-white mb-2 flex items-center">
          <FaBriefcase className="mr-2 text-primary-gold" />
          职业
        </label>
        <input 
          type="text" 
          id="occupation" 
          name="occupation" 
          className="fancy-input" 
          value={formData.occupation} 
          onChange={handleTextChange}
          placeholder="请输入您的职业"
          required 
        />
      </div>
      
      <div>
        <label htmlFor="education" className="block text-white mb-2 flex items-center">
          <FaGraduationCap className="mr-2 text-primary-gold" />
          教育背景
        </label>
        <input 
          type="text" 
          id="education" 
          name="education" 
          className="fancy-input" 
          value={formData.education} 
          onChange={handleTextChange}
          placeholder="如：本科/研究生，所学专业"
          required 
        />
      </div>
    </div>
  );
  
  const renderGoalsAndInterests = () => (
    <div className={`space-y-6 transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <h3 className="text-2xl font-serif font-bold text-primary-gold mb-6">兴趣与目标</h3>
      
      <div>
        <label htmlFor="interests" className="block text-white mb-2 flex items-center">
          <FaHeart className="mr-2 text-primary-gold" />
          兴趣爱好（每行一个）
        </label>
        <textarea 
          id="interests" 
          name="interests" 
          className="fancy-input h-32" 
          value={formData.interests.join('\n')} 
          onChange={(e) => handleMultipleTextChange(e, 'interests')}
          placeholder="例如：阅读、旅行、摄影、烹饪..."
          required 
        />
      </div>
      
      <div>
        <label htmlFor="goals" className="block text-white mb-2 flex items-center">
          <FaStar className="mr-2 text-primary-gold" />
          人生目标（每行一个）
        </label>
        <textarea 
          id="goals" 
          name="goals" 
          className="fancy-input h-32" 
          value={formData.goals.join('\n')} 
          onChange={(e) => handleMultipleTextChange(e, 'goals')}
          placeholder="例如：开设自己的工作室、环游世界、学习一门新语言..."
          required 
        />
      </div>
    </div>
  );
  
  const renderAchievementsAndChallenges = () => (
    <div className={`space-y-6 transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <h3 className="text-2xl font-serif font-bold text-primary-gold mb-6">成就与挑战</h3>
      
      <div>
        <label htmlFor="achievements" className="block text-white mb-2 flex items-center">
          <FaGem className="mr-2 text-primary-gold" />
          人生成就（每行一个）
        </label>
        <textarea 
          id="achievements" 
          name="achievements" 
          className="fancy-input h-32" 
          value={formData.achievements.join('\n')} 
          onChange={(e) => handleMultipleTextChange(e, 'achievements')}
          placeholder="例如：获得某项奖励、完成某个项目、克服困难..."
          required 
        />
      </div>
      
      <div>
        <label htmlFor="challenges" className="block text-white mb-2 flex items-center">
          <FaGem className="mr-2 text-primary-gold" />
          面临的挑战（每行一个）
        </label>
        <textarea 
          id="challenges" 
          name="challenges" 
          className="fancy-input h-32" 
          value={formData.challenges.join('\n')} 
          onChange={(e) => handleMultipleTextChange(e, 'challenges')}
          placeholder="例如：职业发展瓶颈、人际关系挑战、技能提升困难..."
          required 
        />
      </div>
    </div>
  );
  
  const renderPersonality = () => {
    const personalityTraits = [
      { 
        name: "introvert", 
        leftLabel: "内向", 
        rightLabel: "外向" 
      },
      { 
        name: "creative", 
        leftLabel: "实际", 
        rightLabel: "创造" 
      },
      { 
        name: "analytical", 
        leftLabel: "感性", 
        rightLabel: "理性" 
      },
      { 
        name: "adventurous", 
        leftLabel: "谨慎", 
        rightLabel: "冒险" 
      },
      { 
        name: "organized", 
        leftLabel: "灵活", 
        rightLabel: "条理" 
      },
    ];
    
    return (
      <div className={`space-y-8 transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-2xl font-serif font-bold text-primary-gold mb-6">性格特点</h3>
        <p className="text-gray-300 mb-6">请选择最符合您性格特点的选项（1-5分）</p>
        
        {personalityTraits.map((trait) => (
          <div key={trait.name} className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{trait.leftLabel}</span>
              <span className="text-gray-300">{trait.rightLabel}</span>
            </div>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`w-full h-10 rounded transition-all duration-300 ${
                    formData.personality[trait.name as keyof FormData['personality']] === value
                      ? 'bg-primary-gold scale-110'
                      : 'bg-secondary-black border border-gray-600 hover:border-primary-gold'
                  }`}
                  onClick={() => handlePersonalityChange(trait.name as keyof FormData['personality'], value)}
                >
                  <span className="sr-only">{value}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-serif font-bold gold-gradient-text mb-4">创建您的人生剧本</h2>
            <p className="text-xl text-gray-300">
              填写以下信息，我们将为您创作独特的人生剧本
            </p>
          </div>
          
          <div className="bg-secondary-black bg-opacity-90 p-8 rounded-lg gold-border gold-glow backdrop-blur-md">
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step}
                  className={`flex flex-col items-center transition-colors duration-300 ${
                    currentStep >= step ? 'text-primary-gold' : 'text-gray-500'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep === step ? 'bg-primary-gold text-primary-black scale-110' :
                    currentStep > step ? 'bg-primary-gold text-primary-black' : 'bg-gray-800 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  <span className="text-sm mt-2">
                    {step === 1 && '基本信息'}
                    {step === 2 && '兴趣目标'}
                    {step === 3 && '成就挑战'}
                    {step === 4 && '性格特点'}
                  </span>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && renderBasicInfo()}
              {currentStep === 2 && renderGoalsAndInterests()}
              {currentStep === 3 && renderAchievementsAndChallenges()}
              {currentStep === 4 && renderPersonality()}
              
              <div className="flex justify-between mt-10">
                {currentStep > 1 ? (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="outlined-button flex items-center"
                  >
                    <FaArrowLeft className="mr-2" /> 上一步
                  </button>
                ) : (
                  <div></div>
                )}
                
                {currentStep < 4 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="gold-button flex items-center"
                  >
                    下一步 <FaArrowRight className="ml-2" />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="gold-button flex items-center"
                  >
                    生成人生剧本 <FaStar className="ml-2" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 