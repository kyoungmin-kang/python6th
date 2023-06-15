class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        if not  s:
            return ""

        for char in sorted(set(s)):
            suffix = s[s.index(char):]
            if set(s) == set(suffix):
                return  char + self.removeDuplicateLetters(suffix.replace(char, ""))
        return ""