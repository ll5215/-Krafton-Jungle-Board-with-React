export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // 마침표 대신 "-"를 사용하고 날짜와 시간 사이 공백 추가
  const cleanedDate = formattedDate.replace(/\./g, ".").replace(/-\s/g, "-");

  // 날짜와 시간 사이 공백을 두 개로 설정
  return cleanedDate;
}

export function formatDateWithoutTime(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}