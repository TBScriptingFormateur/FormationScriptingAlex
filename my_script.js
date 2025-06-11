


function show_nb_of_pegs(){ // un script pour lister les nodes d'une scène

  var list_de_type_de_nodes = ["PEG"]
  var list_of_nodes = node.getNodes(list_de_type_de_nodes) // list de tout les pegs 
  var compiled_peg_list = list_of_nodes.join("\n")
  MessageBox.information(compiled_peg_list)
  MessageBox.information("number of peg nodes : "+list_of_nodes.length)

  var first_peg = list_of_nodes[0]
  MessageBox.information(first_peg)
  
}