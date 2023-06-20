class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = defaultdict(list)
        for a, b in sorted(tickets):
            graph[a].append(b)

        route = []

        def visit(city):
            while graph[city]:
                next_city = graph[city],pop(0)
                visit(next_city)

        visit("JFK")
        return route[::-1]