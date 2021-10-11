#include <iostream>
#include <vector>
using namespace std;

// n - vershina
// m - rebra

/*
8 9
1 2
1 4
1 6
1 7
3 4
3 5
3 6
6 8
7 8
*/
/*
*/

void dfs (int current, int prev, bool *used, vector<int> *g) {
    used[current] = true;
    if(prev != -1) cout << prev + 1 << " " << current + 1 << "\n";

    for (int i = 0; i < g[current].size(); i++) {
        int neighbour = g[current][i];
        if (!used[neighbour]) {
            dfs(neighbour, current, used, g);
        } else {
            if(neighbour != prev) {
                g[current].erase(g[current].begin() + i);
                for (auto it = g[neighbour].begin(); it != g[neighbour].end();)
                    if (*it == current)
                        it = g[neighbour].erase(it);
                    else ++it;
            }
        }
    }
}


int main() {
    int a, b;
    int n, m;
    cin >> n >> m;

    bool used[n];

    for (int i = 0; i < n; i++) {
        used[i] = false;
    }

    vector<int> g[n];

//    int g2[n][n];

//    for(int i = 0; i < n; i++) {
//        for(int j = 0; j < n; j++) {
//            g2[i][j] = 0;
//        }
//    }

    for(int i = 0; i < m; i++) {
        cin >> a >> b;
        a--;
        b--;

        g[a].push_back(b);
        g[b].push_back(a);

//        g2[a][b] = 1;
//        g2[b][a] = 1;
    }

//    for(int i = 0; i < n; i++) {
//        for(int j = 0; j < n; j++) {
//            cout << g2[i][j] << ' ';
//        }
//        cout << '\n';
//    }

//    for(int i = 0; i < n; i++) {
//        for(int j = 0; j < g[i].size(); j++) {
//            cout << g[i][j] + 1 << ' ';
//        }
//        cout << '\n';
//    }

    dfs (0, -1, used, g);
//    for(int i = 0; i < n; i++) {
//        for(int j = 0; j < g[i].size(); j++) {
//            cout << g[i][j] + 1 << ' ';
//        }
//        cout << '\n';
//    }
}
