import { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: '创建你的人生剧本 | 人生剧本生成器',
  description: '填写您的个人信息和偏好，让我们为您创建一个独特的人生剧本',
}

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
} 