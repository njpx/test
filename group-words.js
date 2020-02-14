const words = [
  "VMRCO",
  "VORCM",
  "MCRTOX",
  "ZXTAC",
  "XZATC",
  "XMTCOR",
  "OXVS",
  "AZTXC",
  "VXOS",
  "RZAT",
  "MRCOTX",
  "SVXO",
  "TRAZ",
  "ZTAR",
  "MVOCR"
];

const groups = {};

words.forEach(word => {
  let charCodeSum = 0;
  for (let i = 0; i < word.length; i++) {
    charCodeSum += word.charCodeAt(i);
  }
  if (!groups[charCodeSum]) {
    groups[charCodeSum] = [];
  }
  groups[charCodeSum].push(word);
});

Object.keys(groups).forEach(key => {
  console.log(groups[key].join("-"));
});
