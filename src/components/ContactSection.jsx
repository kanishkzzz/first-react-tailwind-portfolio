import { Github, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

const ContactSection = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:kanishk8negi@gmail.com?subject=${subject}&body=${body}`

    toast({
      title: 'Opening your mail app',
      description: 'Your default email client should open with your message pre-filled.',
    })

    e.target.reset()
    setIsSubmitting(false)
  }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get in <span className='text-primary'>Touch</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Have a project in mind or want to collaborate? Reach out directly via email,
          phone, GitHub, or by using the contact form below.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a
                    href='mailto:kanishk8negi@gmail.com'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    kanishk8negi@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <a
                    href='tel:+918882310749'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    (+91) 8882310749
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Github className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>GitHub</h4>
                  <a
                    href='https://github.com/kanishkzzz'
                    target='_blank'
                    rel='noreferrer'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    github.com/kanishkzzz
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <p className='text-muted-foreground'>Vaishali, Ghaziabad</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='Kanishk Negi...'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='abc@gmail.com'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  required
                  className='w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className={cn('cosmic-button w-full flex items-center justify-center gap-2')}
              >
                {isSubmitting ? 'Opening Mail...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
