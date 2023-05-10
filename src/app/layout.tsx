import './globals.css'

export const metadata = {
  title: 'Swimmerly',
  description: 'Swimmerly offers private swimming lessons for youth ages 3-10 with a student-instructor ratio for personalized training. Choose from group or private lessons to help your child reach their swim goals. Sign up now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="aqua">
      <body>{children}</body>
    </html>
  )
}
