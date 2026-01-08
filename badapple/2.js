const input = `수영
다이빙
수구
서핑
조정
요트 / 세일링

팀 스포츠
축구
농구
야구
배구
하키
럭비

개인 스포츠
테니스
골프
육상
사이클
체조
복싱

접촉 스포츠
축구
럭비
복싱
레슬링
무술

익스트림 스포츠
스케이트보드
스노보드
암벽 등반
파쿠르
번지 점프`;

function parseInput(input) {
  const blocks = input.trim().split(/\n\s*\n/);
  const result = {};

  blocks.forEach((block, i) => {
    const lines = block.split("\n").map(l => l.trim()).filter(Boolean);

    let category, items;

    if (i === 0 && !lines[0].endsWith("스포츠")) {
      category = "수상 스포츠";
      items = lines;
    } else {
      category = lines[0];
      items = lines.slice(1);
    }

    result[category] = items;
  });

  return result;
}

const parsed = parseInput(input);
console.log(parsed);