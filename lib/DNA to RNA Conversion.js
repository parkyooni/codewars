// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
export default function DNAtoRNA(dna) {
  let str = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      str += "U";
    } else {
      str += dna[i];
    }
  }

  return str;
}

// 삼항연산자 기준 : str += dna[i] === "T" ? "U" : dna[i];

// 문제 풀이 : T의 문자열만 U로 바꿔서 다시 반환하면되는 단순한 알고리즘
