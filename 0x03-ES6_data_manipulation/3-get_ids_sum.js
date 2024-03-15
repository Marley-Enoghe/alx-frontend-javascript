export default function  updateStudentGradeByCity  (list) {
  if (!Array.isArray(list)) return [];
  return list.map((value) => value.id).reduce((p, c) => {
      return p + c;
    }, 0);
};
