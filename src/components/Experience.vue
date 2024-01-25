<script setup>
import CvItem from "./CvItem.vue";
import BriefIcon from "./icons/IconBrief.vue";
</script>
<template>
  <h2 class="mb-3 py-3 ps-5 accentExperience">Work Expriences</h2>
  <CvItem class="pt-3">
    <template #icon>
      <BriefIcon />
    </template>
    <template #years><span class="vert-color">2023 to 2024</span></template>
    <template #heading>Junior Web Developer<span>BeCode</span></template>
    <p>
      BeCode is an active approach bootcamp where I work on various projects,
      both independently and as part of a team, to enhance my skills:
    </p>

    <ul>
      <li>Advanced mastery of the Terminal</li>
      <li>In-depth expertise in Git and GitHub, including GitHub Pages</li>
      <li>Advanced proficiency in writing documentation in Markdown</li>
      <li>Effective design of projects in HTML, CSS, and JavaScript ES6</li>
      <li>
        Successful completion of MERN API Rest projects using Tailwind and Daisy
        UI
      </li>
      <li>Utilization of Express and TypeScript for a REST API</li>
      <li>Basic knowledge of PHP</li>
      <li>Familiarity with Docker</li>
      <li>
        Active technological awareness through participation in Tech Talks and
        adopting cutting-edge methods
      </li>
    </ul>
  </CvItem>
  <CvItem class="pt-3">
    <template #icon>
      <BriefIcon />
    </template>
    <template #years><span class="vert-color">2017 to 2023</span></template>
    <template #heading>Shift leader<span>Ben's Brands</span></template>
    <p>
      Ben's Brands is a Pizza Hut franchise where I performed various tasks
      throughout my progression:
    </p>
    <ul>
      <li>
        Ensuring smooth operation and customer satisfaction as a service manager
      </li>
      <li>
        Adhering to hygiene standards, HACCP guidelines, and internal procedures
      </li>
      <li>Handling staff recruitment and customer complaints</li>
      <li>Prepared to temporarily take on the role of a manager when needed</li>
      <li>Demonstrating flexibility to meet specific customer demands</li>
      <li>Adjusting functions according to changing circumstances</li>
    </ul>
  </CvItem>

  <CvItem>
    <template #icon>
      <BriefIcon />
    </template>
    <template #heading>In-store Support <span>Bart Smit</span></template>
    <template #years><span class="vert-color">2014 to 2015</span></template>
    <ul>
      <li>Ensure smooth daily operations in the store</li>
      <li>
        Facilitate a pleasant shopping experience for customers at Bart Smit
      </li>
      <li>Provide continuous restocking services</li>
      <li>Offer swift cashier services</li>
      <li>Provide personalized packaging services</li>
    </ul>
  </CvItem>

  <CvItem>
    <template #icon>
      <BriefIcon />
    </template>
    <template #heading>In-store Support <span>Red Market</span></template>
    <template #years><span class="vert-color">2013</span></template>
    <ul>
      <li>Restocking shelves</li>
      <li>Handling cash transactions</li>
      <li>Checking shopping carts after customers used self-scanning</li>
    </ul>
  </CvItem>

  <CvItem>
    <template #icon>
      <BriefIcon />
    </template>
    <template #heading
      >Security Guard Expert
      <span
        >European Protection group - Jobmatch - Full Security - Fact Security
      </span></template
    >
    <template #years><span class="vert-color">2010 à 2017</span></template>
    <ul>
      <li>
        Draft accurate and preventive reports for the proper functioning of the
        SEVESO site of Mondelez International.
      </li>
      <li>
        Monitor equipment, personnel, and visitors to ensure compliance with
        hygiene, health, and safety standards.
      </li>
      <li>
        Welcome external personnel providing services such as equipment
        maintenance or technical examinations.
      </li>
      <li>Overseeing public or private events</li>
      <li>Supervising film shoots in Belgium</li>
      <li>Monitoring industrial sites</li>
      <li>Acquiring a variety of skills</li>
    </ul>
  </CvItem>

  <CvItem>
    <template #icon>
      <BriefIcon />
    </template>
    <template #heading> Material Handler - Student</template>
    <template #years><span class="vert-color">2009</span></template>
    <p>
      A diverse job that involves cleaning, organizing stocks, and restocking
      shelves.
    </p>
  </CvItem>
</template>
<style lang="scss">
h5 {
  font-size: 1rem;
}
h6 {
  font-size: 1rem;
}
</style>
