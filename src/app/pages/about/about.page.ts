import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'about',
  template: `
    <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden">
      <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-semibold dark:text-white">About Me</h1>
        <p class="justify-start">I'm Mahmoud Fawzy, a cybersecurity enthusiast and skilled software developer proficient in Python and web development. I foster engaging learning environments for children and students, combining Cisco Cybersecurity Certification with a commitment to growth.</p>
        <p *ngFor="let a of aboutDetails">
          <b class="dark:text-white text-black">{{ a.title }}</b><br />{{ a.desc }}
        </p>
      </div>

      <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-semibold dark:text-white">Contact Information:</h1>
        <p *ngFor="let c of contactInfo">
          <b class="dark:text-white text-black">{{ c.title }}:</b><br />
          <a [href]="c.link" class="hover:underline" target="_blank">{{ c.desc }}</a>
        </p>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule], // Add CommonModule here
  standalone: true
})
export class AboutPage {
  metaService = inject(MetaService);

  constructor() {
    this.metaService.setMetaTags(
      'About - Mahmoud Fawzy',
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
    );
  }

  public aboutDetails = [
    {
      title: 'Experience',
      desc: `Coding Instructor, iSchool, 09/2023 - Present (Remote)
        • Conducting remote programming and AI classes for children
        • Designing and implementing engaging curriculum for young learners
        • Providing personalized guidance to ensure effective learning experiences.

        Student Guide, YAT, 07/2023 - Present (Shibeen El-kom)
        • Provided guidance and mentorship to fellow students at YAT.`
    },
    {
      title: 'Profile Summary',
      desc: `Mahmoud Fawzy, a cybersecurity enthusiast and skilled software developer proficient in Python and web development, fosters engaging learning environments for children and students. With Cisco Cybersecurity Certification and a commitment to growth, he seeks challenging roles to deepen his security knowledge and contribute to impactful software solutions.`
    },
    {
      title: 'Skills',
      desc: `Burp Suite, Port-Swigger, Bootstrap, Laravel, Angular, PHP, Cybersecurity, Data Structure, Network Basics, Wireshark, HTML, JavaScript, Linux, MATLAB, Arduino.`
    },
    {
      title: 'Education',
      desc: `Bachelor of Science in Cybersecurity, Faculty of Artificial Intelligence, Menoufia University, 01/2025 - 12/2025
        • Grade: Very Good`
    },
    {
      title: 'Courses',
      desc: `Cisco Cyber-ops, Linux, Algorithms and Data Structures, Cybersecurity Principles, Wireless Pen-testing, Operating System.`
    },
    {
      title: 'Internship',
      desc: `Front-end Developer, Bank Misr, 07/2023 - 12/2023
        • Completed an intensive internship focused on Angular front-end development.
        • Acquired skills in HTML, CSS, JavaScript, Bootstrap, and the Angular framework.
        • Engaged in practical training sessions.`
    },
    {
      title: 'Certifications',
      desc: `Cisco Cyber-ops, Internship at Bank Misr, eJPTv1, eWPTx (in progress).`
    },
    {
      title: 'Awards',
      desc: `Central Bank FinYology Competition
        • 3rd team in FinYology's Smart Wallet project.
        
        Artificial Intelligence Forum
        • 3rd in the Artificial Intelligence Forum for the Profile-Energy project.
        
        Workshop
        • Organized receptions and workshops for students from Child University and scientific courses on Arduino.
        
        MINT Hackathon
        • 3rd place in a MINT hackathon representing my college with the Smart Wallet project.`
    },
  ];

  public contactInfo = [
    {
      title: 'Mobile Number',
      desc: '+201067783188',
      link: 'tel:+201067783188'
    },
    {
      title: 'Email',
      desc: 'mahmoud.fawzy11122@gmail.com',
      link: 'mailto:mahmoud.fawzy11122@gmail.com'
    }
  ];
}
