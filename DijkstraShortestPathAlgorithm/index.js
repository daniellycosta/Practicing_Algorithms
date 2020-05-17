const sptSet=[]
const graph = [{ //0
  neighbors:[1,7],
  edgeValue:[4,8],
  distanceValue:0,
  previousVertice: 0
},{//1
  neighbors:[0,2,7],
  edgeValue:[4,8,11],
  distanceValue:Infinity,
  previousVertice: null
},{//2
  neighbors:[1,3,8],
  edgeValue:[8,7,2],
  distanceValue:Infinity,
  previousVertice: null
},{//3
  neighbors:[2,4,5],
  edgeValue:[7,14,9],
  distanceValue:Infinity,
  previousVertice: null
},{//4
  neighbors:[3,5],
  edgeValue:[9,10],
  distanceValue:Infinity,
  previousVertice: null
},{//5
  neighbors:[3,4,6],
  edgeValue:[14,10,2],
  distanceValue:Infinity,
  previousVertice: null
},{//6
  neighbors:[5,7,8],
  edgeValue:[2,1,6],
  distanceValue:Infinity,
  previousVertice: null
},{//7
  neighbors:[0,1,6,8],
  edgeValue:[8,11,1,7],
  distanceValue:Infinity,
  previousVertice: null
},{//8
  neighbors:[2,6,7],
  edgeValue:[2,6,7],
  distanceValue:Infinity,
  previousVertice: null
}]

const setSptSet=(i)=>{
  sptSet[i] = true
}

const getNextVertice = (currentVertice)=>{
  const availableNeighbors = graph[currentVertice].neighbors.filter(neighbor=> !sptSet[neighbor])
  console.log(`${availableNeighbors} available from  ${graph[currentVertice].neighbors}`)
  
  return graph[currentVertice].neighbors.reduce((lowerDistanceVerticeI, neighbor,verticeIndex)=>{
  if(!sptSet[neighbor]){
    return (neighbor.distanceValue < graph[lowerDistanceVerticeI].distanceValue)? verticeIndex : lowerDistanceVerticeI
  }
   return lowerDistanceVerticeI
  },graph[currentVertice].neighbors[availableNeighbors[0]])
}


const runDijktras=()=>{
  console.log('Starting Dijkstra\'s Algorithm...')
  let currentVertice = 0
  while (sptSet.length !== graph.length){
    console.log(`Running vertice ${currentVertice}, visited ${sptSet.length} vertices of ${graph.length}`)
    
    setSptSet(currentVertice)
    graph[currentVertice].neighbors.map((neighbor,i)=>{
      if(!sptSet[neighbor]){
      const newDistance = graph[neighbor].edgeValue[i] + graph[currentVertice].distanceValue 
      if(newDistance <  graph[neighbor].distanceValue) {
        graph[neighbor].distanceValue = newDistance
        graph[neighbor].previousVertice = currentVertice
      }
      }
    })
    console.log('Calculating next vertice...')
    currentVertice = getNextVertice(currentVertice)
  }
  console.log('Filtering result...')
  return graph.filter(({distanceValue,previousVertice},i)=>({vertice:i, distanceValue,
    previousVertice}))
}

console.log(runDijktras())