class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        # if not  s:
        #     return ""
        #
        # for char in sorted(set(s)):
        #     suffix = s[s.index(char):]
        #     if set(s) == set(suffix):
        #         return  char + self.removeDuplicateLetters(suffix.replace(char, ""))
        # return ""
        if not s:
            return ""
        #문자열의 문자 빈도수 계산
        counter = {char: 0 for char in set(s)}

        for char in s:
            counter[char] += 1

        #사전순으로 가장 작은 문자의 인뎃스 찾기
        min_idx = 0
        for i, char in enumerate(s):
            if char < s[min_idx]:
                min_idx = i
            counter[char] -= 1
            if counter[char] == 0:
                break
        return s[min_idx] + self.removeDuplicateLetters(s[min_idx + 1:].replace(s[min_idx], ""))