export function arrowStyle(value) {
  if (value>0) {
    return 'glyphicon glyphicon-arrow-up text-success';
  } else {
    return 'glyphicon glyphicon-arrow-down text-danger';
  }
}

export function arrowStyleNegativeReviews(value) {
  if (value>0) {
    return 'glyphicon glyphicon-arrow-up text-danger';
  } else {
    return 'glyphicon glyphicon-arrow-down text-success';
  }
}

export function scoreStyle(value) {
  if (value>=75) {
    return 'pull-left numberCircle numberCircle-success';
  } else if(value<75 && value>=60) {
    return 'pull-left numberCircle numberCircle-warning';
  } else {
    return 'pull-left numberCircle numberCircle-danger';
  }
}

export function generateBarClass(value) {
  if (value>=75) {
    return 'progress-bar progress-bar-success';
  } else if (value<75 && value>=60) {
    return 'progress-bar progress-bar-warning';
  } else {
    return 'progress-bar progress-bar-danger';
  }
}
