const storeImageMap = {
  "toto-izakaya": "https://tblg.k-img.com/restaurant/images/Rvw/365378/640x640_rect_c2952bca6243d6acb23970ce58ebe7cf.jpg",
  "art-hair-grace": "https://town-miyakonojo.com/image/grace/grace001.jpg"
};

if (typeof jobs !== "undefined") {
  jobs.forEach(job => {
    if (storeImageMap[job.id]) job.image = storeImageMap[job.id];
  });

  if (typeof renderJobs === "function") renderJobs();
  if (typeof drawInstagram === "function") drawInstagram();
}
