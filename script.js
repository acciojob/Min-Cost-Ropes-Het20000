import java.util.PriorityQueue;

public class MinCostRopes {
    public static int mincost(int[] arr) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int rope : arr) {
            minHeap.add(rope);
        }
        
        int totalCost = 0;
        
        while (minHeap.size() > 1) {
            int first = minHeap.poll();
            int second = minHeap.poll();
            
            int cost = first + second;
            totalCost += cost;
            
            minHeap.add(cost);
        }
        
        return totalCost;
    }

    public static void main(String[] args) {
        System.out.println(mincost(new int[]{4, 3, 2, 6})); // Output: 29
        System.out.println(mincost(new int[]{1, 2, 3, 4, 5})); // Output: 33
    }
}
