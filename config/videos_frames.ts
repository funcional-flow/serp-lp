const video_serp_1 = Array.from({ length: 120 }, (_, index) => {
  const frame = String(index + 1);
  // const frame = String(index + 1).padStart(3, "0");

  return `/video_serp_1/video_serp1_frame (${frame}).jpg`;
});
const video_serp_2 = Array.from({ length: 192 }, (_, index) => {
  const frame = String(index + 1);
  // const frame = String(index + 1).padStart(3, "0");

  return `/video_serp_2/video_serp2_frame (${frame}).jpg`;
});

export { video_serp_1, video_serp_2 };
