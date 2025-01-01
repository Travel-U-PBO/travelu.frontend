<template>
  <div class="about-us">
    <h1 class="title">Our Team</h1>
    <p class="subtitle">
      "Our team is a blend of creativity, expertise, and determination,
      dedicated to achieving shared goals."
    </p>
    <div
      class="team-member"
      v-for="(member, index) in teamMembers"
      :key="member.name"
      :class="{ 'reverse-layout': index % 2 !== 0 }"
    >
      <img :src="member.image" :alt="member.name" class="member-image" />
      <div class="description" :class="{ 'text-right': index % 2 !== 0 }">
        <h3>{{ member.name }}</h3>
        <h4>{{ member.role }}</h4>
        <p>{{ member.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsPage",
  data() {
    return {
      teamMembers: [
        {
          name: "Imtitsal Ulya Salsabila",
          role: "Frontend",
          image: "public/ulya.png",
          description:
            "Frontend focuses on building user-facing interfaces for applications or websites. Tasks include creating layouts with HTML, CSS, and JavaScript, ensuring responsiveness, integrating APIs, optimizing performance, and collaborating with backend teams and designers.",
        },
        {
          name: "Lauda Dhia Raka",
          role: "Backend",
          image: "public/raka.jpg",
          description:
            "Backend manages the server, database, and application logic, including server setup, database management, API development, and ensuring security and performance. They collaborate with frontend developers for smooth functionality.",
        },
        {
          name: "Salsabila Hidi",
          role: "Frontend",
          image: "public/salsa.jpg",
          description:
            "Frontend focuses on building user-facing interfaces for applications or websites. Tasks include creating layouts with HTML, CSS, and JavaScript, ensuring responsiveness, integrating APIs, optimizing performance, and collaborating with backend teams and designers.",
        },

        {
          name: "Hanif Athalla Mahardika",
          role: "Backend",
          image: "public/hanif.jpg",
          description:
            "Backend manages the server, database, and application logic, including server setup, database management, API development, and ensuring security and performance. They collaborate with frontend developers for smooth functionality.",
        },

        {
          name: "Athayya Khalisah Putri",
          role: "UI Design",
          image: "public/taya.jpg",
          description:
            "A UI Designer creates visually appealing, functional interfaces by designing layouts, icons, and style guides. They collaborate with UX designers and developers, build prototypes, and stay updated on design trends to deliver user-friendly designs.",
        },
        {
          name: "Yoga Bayu Samudra",
          role: "Backend",
          image: "public/sam.jpg",
          description:
            "Backend manages the server, database, and application logic, including server setup, database management, API development, and ensuring security and performance. They collaborate with frontend developers for smooth functionality.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.about-us {
  max-width: 950px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #0077b6;
}

.title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  font-size: 1.2em;
  color: #555;
  margin-bottom: 30px;
}

.team-member {
  display: flex;
  align-items: center;
  margin: 20px 0;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.team-member.reverse-layout {
  flex-direction: row-reverse;
}

.member-image {
  width: 350px;
  height: 150px;
  border-radius: 50%;
  margin: 0 20px;
  object-fit: cover;
}

.description h3 {
  font-size: 1.5em;
  margin-bottom: 5px;
}

.description h4 {
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;
}

.description p {
  font-size: 1em;
  color: #555;
}
</style>
