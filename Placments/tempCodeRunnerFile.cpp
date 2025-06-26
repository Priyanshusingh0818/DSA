#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Fish {
    int size;
    int eatingFactor;
};

int main() {
    int N;
    cout << "Enter number of fish types: ";
    cin >> N;

    vector<Fish> fishes(N);
    cout << "Enter size and eating factor for each fish:\n";
    for (int i = 0; i < N; ++i) {
        cin >> fishes[i].size >> fishes[i].eatingFactor;
    }

    sort(fishes.begin(), fishes.end(), [](Fish a, Fish b) {
        return a.size < b.size || (a.size == b.size && a.eatingFactor < b.eatingFactor);
    });

    vector<int> dp(N, 1);
    int maxSet = 1;

    for (int i = 1; i < N; ++i) {
        for (int j = 0; j < i; ++j) {
            if (fishes[i].size > fishes[j].eatingFactor && fishes[j].size > fishes[i].eatingFactor) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        maxSet = max(maxSet, dp[i]);
    }

    cout << "Maximum number of fish Aravind can have in his pond: " << maxSet << endl;

    return 0;
}
