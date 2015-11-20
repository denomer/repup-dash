// this is a simple thing. We check for existence of a particular
// key in localStorage, if it is there, don't do anything.
// if it isn't, clear localStorage, and put the key in there.
// this key has to be different from the one last used for this setup
// to work well.
// For something which works, use a github commit id as key, if you know that
// you changed how data is cached etc

export default function localStorageBuster(key) {
  if (localStorage.getItem(key) === key) {
    return;
  }

  localStorage.clear();
  localStorage.setItem(key, key);
}
