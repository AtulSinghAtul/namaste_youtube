# Building YouTube

### Read about it?

- Read useSearchParams
- browser urlSearchParams

### Higher Order Function?

- A function take a component and return a component is called HOF. Basicaly it's add some extra functionality on returning component.

### Debouncing?

typing slow = 200ms
typing fast = 30ms

**Performance**:

- iphone pro max = 12 letter \* 1000people = 12000 API Calls

- with debouncing = 3 API calls \* 1000 = 3000

**Debouncing applied with 200ms**:

- if difference between 2 key strokes is less than < 200ms- DECLINE API call

- if > 200ms make an API call

### Caching?

- Cache:
  **time complexity to search in Array = O(n)**
  ["i", "ip", "iph"]
  **time complexity to search in Object = O(1)**
  {
  i:
  ip:
  iph:
  }

  - o of 1 is for better than o of n
  - searchin inside object `new Map()` is more optimize.

  ## We will build n level nested comment
