chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: "https://mail.google.com/mail/u/0/#search/label%3Afun-veritas+subject%3A%22v-21-%22+OR+subject%3A%22v-22-%22+OR+subject%3A%22v-23-%22"
  });
});

