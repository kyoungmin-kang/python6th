class Solution:
    def permute(self, num: List[int]) -> List[List[int]]:
        def dfs(path):
            if len(path) == len(nums):
                result.append(path[:])
                return
            for i in range(len(nums)):
                if nums[i] in path:
                    continue
                dfs(path + [nums[i]])

        result = []
        dfs([])
        return result
