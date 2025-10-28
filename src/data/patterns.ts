import { Pattern } from '@/types/pattern';

export const initialPatterns: Pattern[] = [
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    expanded: false,
    problems: [
      { id: 'tp-1', title: 'Pair with Target Sum', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tp-2', title: 'Remove Duplicates', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tp-3', title: 'Squaring a Sorted Array', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tp-4', title: 'Triplet Sum to Zero', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tp-5', title: 'Triplet Sum Close to Target', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tp-6', title: 'Triplets with Smaller Sum', difficulty: 'medium', links: [{ text: 'LintCode', url: 'https://www.lintcode.com' }], completed: false, starred: false },
      { id: 'tp-7', title: 'Subarrays with Product Less than a Target', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tp-8', title: 'Dutch National Flag Problem', difficulty: 'medium', links: [{ text: 'CoderByte', url: 'https://coderbyte.com' }], completed: false, starred: false },
      { id: 'tp-9', title: 'Quadruple Sum to Target', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tp-10', title: 'Comparing Strings containing Backspaces', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tp-11', title: 'Minimum Window Sort', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'fast-slow-pointers',
    name: 'Fast & Slow Pointers',
    expanded: false,
    problems: [
      { id: 'fsp-1', title: 'LinkedList Cycle', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'fsp-2', title: 'Start of LinkedList Cycle', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'fsp-3', title: 'Happy Number', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'fsp-4', title: 'Middle of the LinkedList', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'fsp-5', title: 'Palindrome LinkedList', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'fsp-6', title: 'Rearrange a LinkedList', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'fsp-7', title: 'Cycle in a Circular Array', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    expanded: false,
    problems: [
      { id: 'sw-1', title: 'Maximum Sum Subarray of Size K', difficulty: 'easy', links: [], completed: false, starred: false },
      { id: 'sw-2', title: 'Smallest Subarray with a given sum', difficulty: 'easy', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'sw-3', title: 'Longest Substring with K Distinct Characters', difficulty: 'medium', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'sw-4', title: 'Fruits into Baskets', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'sw-5', title: 'No-repeat Substring', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'sw-6', title: 'Longest Substring with Same Letters after Replacement', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'sw-7', title: 'Longest Subarray with Ones after Replacement', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'sw-8', title: 'Permutation in a String', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'sw-9', title: 'String Anagrams', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'sw-10', title: 'Smallest Window containing Substring', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'sw-11', title: 'Words Concatenation', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'merge-intervals',
    name: 'Merge Intervals',
    expanded: false,
    problems: [
      { id: 'mi-1', title: 'Merge Intervals', difficulty: 'medium', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'mi-2', title: 'Insert Interval', difficulty: 'medium', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'mi-3', title: 'Intervals Intersection', difficulty: 'medium', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'mi-4', title: 'Conflicting Appointments', difficulty: 'medium', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
    ]
  },
  {
    id: 'cyclic-sort',
    name: 'Cyclic Sort',
    expanded: false,
    problems: [
      { id: 'cs-1', title: 'Cyclic Sort', difficulty: 'easy', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'cs-2', title: 'Find the Missing Number', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'cs-3', title: 'Find all Missing Numbers', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'cs-4', title: 'Find the Duplicate Number', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'cs-5', title: 'Find all Duplicate Numbers', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'cs-6', title: 'Find the Corrupt Pair', difficulty: 'easy', links: [], completed: false, starred: false },
      { id: 'cs-7', title: 'Find the Smallest Missing Positive Number', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'cs-8', title: 'Find the First K Missing Positive Numbers', difficulty: 'hard', links: [], completed: false, starred: false },
    ]
  },
  {
    id: 'in-place-reversal',
    name: 'In-place Reversal of LinkedList',
    expanded: false,
    problems: [
      { id: 'ir-1', title: 'Reverse a LinkedList', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ir-2', title: 'Reverse a Sub-list', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ir-3', title: 'Reverse every K-element Sub-list', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ir-4', title: 'Reverse alternating K-element Sub-list', difficulty: 'medium', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'ir-5', title: 'Rotate a LinkedList', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'stack',
    name: 'Stack',
    expanded: false,
    problems: [
      { id: 'st-1', title: 'Balanced Parentheses', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'st-2', title: 'Reverse a String', difficulty: 'easy', links: [], completed: false, starred: false },
      { id: 'st-3', title: 'Decimal to Binary Conversion', difficulty: 'easy', links: [], completed: false, starred: false },
      { id: 'st-4', title: 'Next Greater Element', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'st-5', title: 'Sorting a Stack', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'st-6', title: 'Simplify Path', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'monotonic-stack',
    name: 'Monotonic Stack',
    expanded: false,
    problems: [
      { id: 'ms-1', title: 'Next Greater Element', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ms-2', title: 'Daily Temperatures', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ms-3', title: 'Remove Nodes From Linked List', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ms-4', title: 'Remove All Adjacent Duplicates In String', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ms-5', title: 'Remove All Adjacent Duplicates in String II', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ms-6', title: 'Remove K Digits', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'hash-maps',
    name: 'Hash Maps',
    expanded: false,
    problems: [
      { id: 'hm-1', title: 'First Non-repeating Character', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'hm-2', title: 'Largest Unique Number', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'hm-3', title: 'Maximum Number of Balloons', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'hm-4', title: 'Longest Palindrome', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'hm-5', title: 'Ransom Note', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'tree-bfs',
    name: 'Tree Breadth First Search',
    expanded: false,
    problems: [
      { id: 'tbfs-1', title: 'Binary Tree Level Order Traversal', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tbfs-2', title: 'Reverse Level Order Traversal', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tbfs-3', title: 'Zigzag Traversal', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tbfs-4', title: 'Level Averages in a Binary Tree', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tbfs-5', title: 'Minimum Depth of a Binary Tree', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tbfs-6', title: 'Maximum Depth of a Binary Tree', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tbfs-7', title: 'Level Order Successor', difficulty: 'easy', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'tbfs-8', title: 'Connect Level Order Siblings', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tbfs-9', title: 'Connect All Level Order Siblings', difficulty: 'medium', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'tbfs-10', title: 'Right View of a Binary Tree', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'tree-dfs',
    name: 'Tree Depth First Search',
    expanded: false,
    problems: [
      { id: 'tdfs-1', title: 'Binary Tree Path Sum', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tdfs-2', title: 'All Paths for a Sum', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tdfs-3', title: 'Sum of Path Numbers', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tdfs-4', title: 'Path With Given Sequence', difficulty: 'medium', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'tdfs-5', title: 'Count Paths for a Sum', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tdfs-6', title: 'Tree Diameter', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tdfs-7', title: 'Path with Maximum Sum', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'graphs',
    name: 'Graphs',
    expanded: false,
    problems: [
      { id: 'gr-1', title: 'Find if Path Exists in Graph', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'gr-2', title: 'Number of Provinces', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'gr-3', title: 'Minimum Number of Vertices to Reach All Nodes', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'islands',
    name: 'Islands (Matrix Traversal)',
    expanded: false,
    problems: [
      { id: 'is-1', title: 'Number of Islands', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'is-2', title: 'Biggest Island', difficulty: 'easy', links: [], completed: false, starred: false },
      { id: 'is-3', title: 'Flood Fill', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'is-4', title: 'Number of Closed Islands', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'two-heaps',
    name: 'Two Heaps',
    expanded: false,
    problems: [
      { id: 'th-1', title: 'Find the Median of a Number Stream', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'th-2', title: 'Sliding Window Median', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'th-3', title: 'Maximize Capital', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'th-4', title: 'Maximum Sum Combinations', difficulty: 'medium', links: [{ text: 'InterviewBit', url: 'https://www.interviewbit.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'subsets',
    name: 'Subsets',
    expanded: false,
    problems: [
      { id: 'sb-1', title: 'Subsets', difficulty: 'easy', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'sb-2', title: 'Subsets With Duplicates', difficulty: 'easy', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'sb-3', title: 'Permutations', difficulty: 'medium', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'sb-4', title: 'String Permutations by changing case', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'sb-5', title: 'Balanced Parentheses', difficulty: 'hard', links: [], completed: false, starred: false },
      { id: 'sb-6', title: 'Unique Generalized Abbreviations', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'modified-binary-search',
    name: 'Modified Binary Search',
    expanded: false,
    problems: [
      { id: 'mbs-1', title: 'Order-agnostic Binary Search', difficulty: 'easy', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'mbs-2', title: 'Ceiling of a Number', difficulty: 'medium', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'mbs-3', title: 'Next Letter', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'mbs-4', title: 'Number Range', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'mbs-5', title: 'Search in a Sorted Infinite Array', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'mbs-6', title: 'Minimum Difference Element', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'mbs-7', title: 'Bitonic Array Maximum', difficulty: 'easy', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'mbs-8', title: 'Search Bitonic Array', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'mbs-9', title: 'Search in Rotated Array', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'mbs-10', title: 'Rotation Count', difficulty: 'medium', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'mbs-11', title: 'Search a 2D Matrix', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'mbs-12', title: 'Minimum Number of Days to Make m Bouquets', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'mbs-13', title: 'Koko Eating Bananas', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'mbs-14', title: 'Capacity To Ship Packages Within D Days', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'mbs-15', title: 'Median of Two Sorted Arrays', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'bitwise-xor',
    name: 'Bitwise XOR',
    expanded: false,
    problems: [
      { id: 'bx-1', title: 'Single Number', difficulty: 'easy', links: [], completed: false, starred: false },
      { id: 'bx-2', title: 'Two Single Numbers', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'bx-3', title: 'Complement of Base 10 Number', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'bx-4', title: 'Flip and Invert an Image', difficulty: 'hard', links: [], completed: false, starred: false },
    ]
  },
  {
    id: 'top-k-elements',
    name: "Top 'K' Elements",
    expanded: false,
    problems: [
      { id: 'tk-1', title: "Top 'K' Numbers", difficulty: 'easy', links: [], completed: false, starred: false },
      { id: 'tk-2', title: 'Kth Smallest Number', difficulty: 'easy', links: [], completed: false, starred: false },
      { id: 'tk-3', title: "'K' Closest Points to the Origin", difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tk-4', title: 'Connect Ropes', difficulty: 'easy', links: [], completed: false, starred: false },
      { id: 'tk-5', title: "Top 'K' Frequent Numbers", difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'tk-6', title: 'Frequency Sort', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'tk-7', title: 'Kth Largest Number in a Stream', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tk-8', title: "'K' Closest Numbers", difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'tk-9', title: 'Maximum Distinct Elements', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'tk-10', title: 'Sum of Elements', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'tk-11', title: 'Rearrange String', difficulty: 'hard', links: [], completed: false, starred: false },
      { id: 'tk-12', title: 'Rearrange String K Distance Apart', difficulty: 'hard', links: [], completed: false, starred: false },
      { id: 'tk-13', title: 'Scheduling Tasks', difficulty: 'hard', links: [], completed: false, starred: false },
      { id: 'tk-14', title: 'Frequency Stack', difficulty: 'hard', links: [], completed: false, starred: false },
    ]
  },
  {
    id: 'k-way-merge',
    name: 'K-way Merge',
    expanded: false,
    problems: [
      { id: 'km-1', title: 'Merge K Sorted Lists', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'km-2', title: 'Kth Smallest Number in M Sorted Lists', difficulty: 'medium', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'km-3', title: 'Kth Smallest Number in a Sorted Matrix', difficulty: 'hard', links: [{ text: 'Educative', url: 'https://www.educative.io' }], completed: false, starred: false },
      { id: 'km-4', title: 'Smallest Number Range', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'km-5', title: 'K Pairs with Largest Sums', difficulty: 'hard', links: [], completed: false, starred: false },
    ]
  },
  {
    id: 'greedy',
    name: 'Greedy Algorithms',
    expanded: false,
    problems: [
      { id: 'gd-1', title: 'Valid Palindrome II', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'gd-2', title: 'Maximum Length of Pair Chain', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'gd-3', title: 'Minimum Add to Make Parentheses Valid', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'gd-4', title: 'Remove Duplicate Letters', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'gd-5', title: 'Largest Palindromic Number', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'gd-6', title: 'Removing Minimum and Maximum From Array', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'dp-knapsack',
    name: '0/1 Knapsack (Dynamic Programming)',
    expanded: false,
    problems: [
      { id: 'dpk-1', title: '0/1 Knapsack', difficulty: 'medium', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'dpk-2', title: 'Equal Subset Sum Partition', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'dpk-3', title: 'Subset Sum', difficulty: 'medium', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'dpk-4', title: 'Minimum Subset Sum Difference', difficulty: 'hard', links: [{ text: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }], completed: false, starred: false },
      { id: 'dpk-5', title: 'Count of Subset Sum', difficulty: 'hard', links: [], completed: false, starred: false },
      { id: 'dpk-6', title: 'Target Sum', difficulty: 'hard', links: [], completed: false, starred: false },
    ]
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    expanded: false,
    problems: [
      { id: 'bt-1', title: 'Combination Sum', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'bt-2', title: 'Word Search', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'bt-3', title: 'Sudoku Solver', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'bt-4', title: 'Factor Combinations', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'bt-5', title: 'Split a String Into the Max Number of Unique Substrings', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'trie',
    name: 'Trie',
    expanded: false,
    problems: [
      { id: 'tr-1', title: 'Implement Trie (Prefix Tree)', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tr-2', title: 'Index Pairs of a String', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tr-3', title: 'Design Add and Search Words Data Structure', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tr-4', title: 'Extra Characters in a String', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'tr-5', title: 'Search Suggestions System', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'topological-sort',
    name: 'Topological Sort',
    expanded: false,
    problems: [
      { id: 'ts-1', title: 'Topological Sort', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'ts-2', title: 'Tasks Scheduling', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ts-3', title: 'Tasks Scheduling Order', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ts-4', title: 'All Tasks Scheduling Orders', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ts-5', title: 'Alien Dictionary', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ts-6', title: 'Reconstructing a Sequence', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'ts-7', title: 'Minimum Height Trees', difficulty: 'hard', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'union-find',
    name: 'Union Find',
    expanded: false,
    problems: [
      { id: 'uf-1', title: 'Redundant Connection', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'uf-2', title: 'Number of Provinces', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'uf-3', title: 'Is Graph Bipartite?', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'uf-4', title: 'Path With Minimum Effort', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
    ]
  },
  {
    id: 'ordered-set',
    name: 'Ordered Set',
    expanded: false,
    problems: [
      { id: 'os-1', title: 'Merge Similar Items', difficulty: 'easy', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'os-2', title: '132 Pattern', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'os-3', title: 'My Calendar I', difficulty: 'medium', links: [{ text: 'LeetCode', url: 'https://leetcode.com' }], completed: false, starred: false },
      { id: 'os-4', title: 'Longest Continuous Subarray', difficulty: 'medium', links: [], completed: false, starred: false },
    ]
  },
  {
    id: 'multi-thread',
    name: 'Multi-thread',
    expanded: false,
    problems: [
      { id: 'mt-1', title: 'Same Tree', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'mt-2', title: 'Invert Binary Tree', difficulty: 'medium', links: [], completed: false, starred: false },
      { id: 'mt-3', title: 'Binary Search Tree Iterator', difficulty: 'medium', links: [], completed: false, starred: false },
    ]
  },
  {
    id: 'miscellaneous',
    name: 'Miscellaneous',
    expanded: false,
    problems: [
      { id: 'misc-1', title: 'Kth Smallest Number', difficulty: 'hard', links: [], completed: false, starred: false },
    ]
  },
];
