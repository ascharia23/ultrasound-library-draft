// To add a video: copy one entry, change the fields, and put the files in /videos and /posters.
const CATEGORIES = ["Normal (reference)", "Heart defect", "Brain / hydrocephalus", "Growth restriction", "Placenta & amniotic fluid", "Abdominal wall defect", "Cleft lip / palate"];
const VIDEOS = [
  {
    "id": "clip01",
    "title": "Early reference scan",
    "week": 12,
    "category": "Normal (reference)",
    "video": "videos/clip01.mp4",
    "poster": "posters/clip01.jpg",
    "description": "Placeholder clip for the 'Normal (reference)' category at week 12. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip02",
    "title": "Anatomy scan reference",
    "week": 20,
    "category": "Normal (reference)",
    "video": "videos/clip02.mp4",
    "poster": "posters/clip02.jpg",
    "description": "Placeholder clip for the 'Normal (reference)' category at week 20. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip03",
    "title": "Third-trimester reference",
    "week": 32,
    "category": "Normal (reference)",
    "video": "videos/clip03.mp4",
    "poster": "posters/clip03.jpg",
    "description": "Placeholder clip for the 'Normal (reference)' category at week 32. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip04",
    "title": "Four-chamber view",
    "week": 14,
    "category": "Heart defect",
    "video": "videos/clip04.mp4",
    "poster": "posters/clip04.jpg",
    "description": "Placeholder clip for the 'Heart defect' category at week 14. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip05",
    "title": "Outflow tract view",
    "week": 22,
    "category": "Heart defect",
    "video": "videos/clip05.mp4",
    "poster": "posters/clip05.jpg",
    "description": "Placeholder clip for the 'Heart defect' category at week 22. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip06",
    "title": "Heart rhythm clip",
    "week": 30,
    "category": "Heart defect",
    "video": "videos/clip06.mp4",
    "poster": "posters/clip06.jpg",
    "description": "Placeholder clip for the 'Heart defect' category at week 30. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip07",
    "title": "Ventricle view",
    "week": 18,
    "category": "Brain / hydrocephalus",
    "video": "videos/clip07.mp4",
    "poster": "posters/clip07.jpg",
    "description": "Placeholder clip for the 'Brain / hydrocephalus' category at week 18. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip08",
    "title": "Brain cross-section",
    "week": 24,
    "category": "Brain / hydrocephalus",
    "video": "videos/clip08.mp4",
    "poster": "posters/clip08.jpg",
    "description": "Placeholder clip for the 'Brain / hydrocephalus' category at week 24. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip09",
    "title": "Late brain follow-up",
    "week": 34,
    "category": "Brain / hydrocephalus",
    "video": "videos/clip09.mp4",
    "poster": "posters/clip09.jpg",
    "description": "Placeholder clip for the 'Brain / hydrocephalus' category at week 34. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip10",
    "title": "Biometry follow-up",
    "week": 26,
    "category": "Growth restriction",
    "video": "videos/clip10.mp4",
    "poster": "posters/clip10.jpg",
    "description": "Placeholder clip for the 'Growth restriction' category at week 26. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip11",
    "title": "Growth measurement",
    "week": 32,
    "category": "Growth restriction",
    "video": "videos/clip11.mp4",
    "poster": "posters/clip11.jpg",
    "description": "Placeholder clip for the 'Growth restriction' category at week 32. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip12",
    "title": "Late growth check",
    "week": 38,
    "category": "Growth restriction",
    "video": "videos/clip12.mp4",
    "poster": "posters/clip12.jpg",
    "description": "Placeholder clip for the 'Growth restriction' category at week 38. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip13",
    "title": "Placenta position",
    "week": 20,
    "category": "Placenta & amniotic fluid",
    "video": "videos/clip13.mp4",
    "poster": "posters/clip13.jpg",
    "description": "Placeholder clip for the 'Placenta & amniotic fluid' category at week 20. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip14",
    "title": "Fluid level check",
    "week": 28,
    "category": "Placenta & amniotic fluid",
    "video": "videos/clip14.mp4",
    "poster": "posters/clip14.jpg",
    "description": "Placeholder clip for the 'Placenta & amniotic fluid' category at week 28. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip15",
    "title": "Placenta follow-up",
    "week": 36,
    "category": "Placenta & amniotic fluid",
    "video": "videos/clip15.mp4",
    "poster": "posters/clip15.jpg",
    "description": "Placeholder clip for the 'Placenta & amniotic fluid' category at week 36. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip16",
    "title": "Early abdominal view",
    "week": 13,
    "category": "Abdominal wall defect",
    "video": "videos/clip16.mp4",
    "poster": "posters/clip16.jpg",
    "description": "Placeholder clip for the 'Abdominal wall defect' category at week 13. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip17",
    "title": "Abdominal wall view",
    "week": 21,
    "category": "Abdominal wall defect",
    "video": "videos/clip17.mp4",
    "poster": "posters/clip17.jpg",
    "description": "Placeholder clip for the 'Abdominal wall defect' category at week 21. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip18",
    "title": "Profile view",
    "week": 16,
    "category": "Cleft lip / palate",
    "video": "videos/clip18.mp4",
    "poster": "posters/clip18.jpg",
    "description": "Placeholder clip for the 'Cleft lip / palate' category at week 16. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip19",
    "title": "Lip and palate view",
    "week": 22,
    "category": "Cleft lip / palate",
    "video": "videos/clip19.mp4",
    "poster": "posters/clip19.jpg",
    "description": "Placeholder clip for the 'Cleft lip / palate' category at week 22. Replace with an approved Pulsenmore video."
  },
  {
    "id": "clip20",
    "title": "Facial follow-up",
    "week": 28,
    "category": "Cleft lip / palate",
    "video": "videos/clip20.mp4",
    "poster": "posters/clip20.jpg",
    "description": "Placeholder clip for the 'Cleft lip / palate' category at week 28. Replace with an approved Pulsenmore video."
  }
];
