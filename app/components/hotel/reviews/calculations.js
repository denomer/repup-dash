export function calculateReviewsLineGraphData({reviewStats}, flag) {
  const xAxis = reviewStats.map(({month}) => month.name);
  const yAxis = reviewStats
    .map(({categories}) => {
      return {
        total: categories.map(({reviews}) => reviews)
          .reduce((allReviews, reviews) => allReviews.concat(reviews), [])
          .reduce((total, {counts}) => total + counts[flag], 0),

        categories: categories
          .map((category) => {
            return {
              name: category.name,
              total: category.reviews
                .reduce((total, {counts}) => total + counts[flag], 0)
            };
          })
          .filter(({total}) => {
            return total > 0;
          })
      };
    })
  ;

  return {xAxis, yAxis};
}

export function calculateReviewsPieGraphData({reviewStats}, flag) {
  const otaCounts = reviewStats.map(({categories}) => {
    return categories.map(({reviews}) => {
      return reviews.map(({ota, counts}) => { return {ota, count: counts[flag]}; });
    }).reduce((allItems, items) => allItems.concat(items), []);
  }).reduce((allItems, items) => allItems.concat(items), []);

  let otaPieScores = {};
  otaCounts.forEach((otaCount)=>{
    if(otaPieScores!=undefined) {
      if(otaPieScores[otaCount.ota]) {
        let count = otaPieScores[otaCount.ota];
        otaPieScores[otaCount.ota] = count+otaCount.count;
        }else {
          otaPieScores[otaCount.ota] = otaCount.count;
        }
      }
    });
  return otaPieScores;
}