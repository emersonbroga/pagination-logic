const generatePagination = (current, total, currentLabel = "current", gapLabel = "_") => {
  const sides = 2;

  let pages = [];
  let start = Math.max(current - sides, 1);
  let end = Math.min(current + sides, total);

  if (start > 1) pages.push(1);
  if (start === 3) pages.push(2);
  if (start >= 4) pages.push(gapLabel);

  for (let i = start; i <= end; i++) {
    if (i === current) pages.push(currentLabel);
    if (i !== current) pages.push(i);
  }

  if (end < total - sides) pages.push(gapLabel);
  if (end === total - sides) pages.push(total - 1);
  if (end < total) pages.push(total);

  return pages;
};

module.exports = { generatePagination };
