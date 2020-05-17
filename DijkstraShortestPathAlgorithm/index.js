const DijkstraFactory = (graph, startVertice) => {
  let sptSet = new Array(graph.length).fill(false);

  setSptSet = (i) => {
    sptSet[i] = true;
  };

  getNextVertice = (currentVertice) => {
    const availableNeighbors = graph[currentVertice].neighbors.filter(
      (neighbor) => !sptSet[neighbor]
    );

    console.log(
      `${
        availableNeighbors.length ? availableNeighbors : "none"
      } available from  ${graph[currentVertice].neighbors}`
    );

    return availableNeighbors.length
      ? graph[currentVertice].neighbors.reduce(
          (lowerDistanceVerticeI, neighbor) => {
            if (!sptSet[neighbor]) {
              return graph[neighbor].distanceValue <
                graph[lowerDistanceVerticeI].distanceValue
                ? neighbor
                : lowerDistanceVerticeI;
            }
            return lowerDistanceVerticeI;
          },
          availableNeighbors[0]
        )
      : -1;
  };

  printResult = () => {
    console.log(
      graph.map(({ distanceValue, previousVertice }, i) => ({
        vertice: i,
        distanceValue,
        previousVertice,
      }))
    );
  };

  return {
    run: () => {
      console.log("Starting Dijkstra's Algorithm...");
      let currentVertice = startVertice;
      graph[startVertice].distanceValue = 0;

      while (
        sptSet.filter((vertice) => vertice).length !== graph.length &&
        currentVertice !== -1
      ) {
        setSptSet(currentVertice);

        console.log(
          `\n\nRunning vertice ${currentVertice}, visited ${
            sptSet.filter((vertice) => vertice).length
          } vertices of ${graph.length}`
        );

        console.log(
          `Already visited: ${[0, 1, 2, 3, 4, 5, 6, 7, 8].filter((item) => {
            return !!sptSet[item];
          })}`
        );

        graph[currentVertice].neighbors.map((neighbor, i) => {
          if (!sptSet[neighbor]) {
            const newDistance =
              graph[currentVertice].edgeValue[i] +
              graph[currentVertice].distanceValue;

            console.log(
              `New Distance from ${currentVertice} to ${neighbor}: ${graph[currentVertice].edgeValue[i]} + ${graph[currentVertice].distanceValue} `
            );

            if (newDistance < graph[neighbor].distanceValue) {
              graph[neighbor].distanceValue = newDistance;
              graph[neighbor].previousVertice = currentVertice;
            }

            console.log(
              `Distance from ${currentVertice} to ${neighbor}: ${graph[neighbor].distanceValue}`
            );
          }
        });
        console.log("Calculating next vertice...");
        currentVertice = getNextVertice(currentVertice);
      }
      console.log("\n\nPrinting result...\n\n");
      printResult();
    },
  };
};

const exampleGraph = [
  {
    //0
    neighbors: [1, 7],
    edgeValue: [4, 8],
    distanceValue: Infinity,
    previousVertice: null,
  },
  {
    //1
    neighbors: [0, 2, 7],
    edgeValue: [4, 8, 11],
    distanceValue: Infinity,
    previousVertice: null,
  },
  {
    //2
    neighbors: [1, 3, 5, 8],
    edgeValue: [8, 7, 4, 2],
    distanceValue: Infinity,
    previousVertice: null,
  },
  {
    //3
    neighbors: [2, 4, 5],
    edgeValue: [7, 9, 14],
    distanceValue: Infinity,
    previousVertice: null,
  },
  {
    //4
    neighbors: [3, 5],
    edgeValue: [9, 10],
    distanceValue: Infinity,
    previousVertice: null,
  },
  {
    //5
    neighbors: [2, 3, 4, 6],
    edgeValue: [4, 14, 10, 2],
    distanceValue: Infinity,
    previousVertice: null,
  },
  {
    //6
    neighbors: [5, 7, 8],
    edgeValue: [2, 1, 6],
    distanceValue: Infinity,
    previousVertice: null,
  },
  {
    //7
    neighbors: [0, 1, 6, 8],
    edgeValue: [8, 11, 1, 7],
    distanceValue: Infinity,
    previousVertice: null,
  },
  {
    //8
    neighbors: [2, 6, 7],
    edgeValue: [2, 6, 7],
    distanceValue: Infinity,
    previousVertice: null,
  },
];

const Test = DijkstraFactory(exampleGraph, 0);
Test.run();
