import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import new_logo from './new_logo.png'
import new_logo_ from './new_logo.ico'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    new_logo,
    new_logo_
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:'Graphic Designer',
        stars:5,
        text:`As a graphic designer, Scribble AI has revolutionized my workflow. I can quickly generate concept art based on my descriptions, saving me hours of manual work. The quality is stunning, and the AI understands even the most abstract prompts!.`
    },
    {
        image:profile_img_2,
        name:'Richard Nelson',
        role:'Content Creator',
        stars:5,
        text:`"I run a small business, and Scribble AI helps me create eye-catching visuals for my posts without hiring a designer. The results are professional, and the customization options are fantastic. Highly recommend!.`
    },
    {
        image:profile_img_1,
        name:'Karen Smith',
        role:' Author',
        stars:4,
        text:`"I’m an author, and Scribble AI helps me visualize scenes from my book. The AI captures the mood and details perfectly—it’s like having a personal illustrator. Absolutely worth it!.`
    },
    {
        image:profile_img_2,
        name:'Joe Willson',
        role:' Game Developer',
        stars:4,
        text:`As a game developer, I use Scribble AI to quickly mock up character designs and environments. It speeds up my creative process and gives me fresh ideas. A must-have tool!.`
    },
    {
        image:profile_img_2,
        name:'Jacob Duffy',
        role:'Blogger',
        stars:5,
        text:`My children love typing in silly prompts and seeing what Scribble AI creates. It’s fun, educational, and sparks their imagination. Family-approved!.`
    },
    {
        image:profile_img_1,
        name:'James Marsden',
        role:' Programmer',
        stars:4,
        text:`I was skeptical at first, but Scribble AI blew me away. I typed in a simple description of a futuristic city, and it generated a breathtaking image in seconds. The tech is insane!.`
    }
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]