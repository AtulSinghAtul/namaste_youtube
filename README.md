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

  **Note:-** Search is using live api , search is using dbouncing and our search is using caching.

## How we will build n level nested comment?

- using recursion for building n level nested comment

## What is LRU cache?

## Building Live Chat?

**Challenges:-**

- Data Layer - Get data live
- UI Layer - update the ui

- Live chat >>>>>> infinite scroll >>> Pagination

**Data Live:**

- there are two ways we can handle live data

- **1:- Web Socket:** Web socket is a two way connection ui and server side and this quickley send data from both of side so it's a by directional live data. websocket have `no regular interval`.
  example:- Trading App, whatsapp

- **2:- API Polling:** UI request the server and the data flow server to ui. It's one directional and API Polling `have interval`.
  Example:- gmail, cricbuzz
