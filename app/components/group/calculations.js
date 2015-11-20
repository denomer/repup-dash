export function calculateBrandRepScore(ratingsOfHotels) {
  const total = ratingsOfHotels
    .map(({repScore}) => repScore)
    .reduce((sum, score) => { return sum + score; }, 0)
  ;

  const avg = total/ratingsOfHotels.length;

  return Math.round(avg);
}

export function calculateSocialMediaShares(ratingsOfHotels) {
  return ratingsOfHotels
    .map(({social}) => {
      return social
        .map((platformData) => {
          switch (platformData.platform) {
            case 'facebook': return (() => {
              const {pageStats, userPosts} = platformData.fbData;
              return pageStats.talkingAboutCount + userPosts.totalPosts;
            })();

            case 'foursquare': return (() => {
              return platformData.fourSquareData.tips.totalTips;
            })();

            case 'instagram':
            case 'twitter': return (() => {
              return platformData.data.tagStats
                .reduce((total, stat) => { return total + stat.totalFeeds; }, 0);
            })();

            default: return 0;
          }
        })
      ;
    })
    .reduce((allShares, shares) => { return allShares.concat(shares); }, [])
    .reduce((total, shares) => { return total + shares; }, 0)
  ;
}

export function calculateReviewsData(ratingsOfHotels, key) {
  const totalCurrent = ratingsOfHotels
    .map(({review}) => review[key].current)
    .reduce((sum, score) => { return sum + score; }, 0)
  ;

  const totalPrevious = ratingsOfHotels
    .map(({review}) => review[key].previous)
    .reduce((sum, score) => { return sum + score; }, 0)
  ;

  return {
    total: totalCurrent + totalPrevious,
    change: totalPrevious === 0 ? 100 : Math.round((totalCurrent-totalPrevious)/totalPrevious)
  };
}

export function calculateBestProperty(hotels, ratingsOfHotels) {
  const maxRepScoreHotelRating = ratingsOfHotels
    .reduce((maxRating, rating) => {
      return rating.repScore > maxRating.repScore ? rating : maxRating;
    })
  ;

  const maxHotel = hotels
    .filter(({hotelId}) => hotelId === maxRepScoreHotelRating.id)
    .reduce((hotel) => hotel);

  return {hotel: maxHotel, score: Math.round(maxRepScoreHotelRating.repScore)};
}

export function calculateWorstProperty(hotels, ratingsOfHotels) {
  const minRepScoreHotelRating = ratingsOfHotels
    .reduce((minRating, rating) => {
      return rating.repScore < minRating.repScore ? rating : minRating;
    })
  ;

  const minHotel = hotels
    .filter(({hotelId}) => hotelId === minRepScoreHotelRating.id)
    .reduce((hotel) => hotel);

  return {hotel: minHotel, score: Math.round(minRepScoreHotelRating.repScore)};
}
