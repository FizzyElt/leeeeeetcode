let format_file_name f =
  let parts = String.split_on_char '.' f in
  let name = List.hd parts in
  let name_parts = String.split_on_char '_' name in
  let problem_number =
    List.nth name_parts (List.length name_parts - 1) |> int_of_string
  in
  let problem_name =
    List.take (List.length name_parts - 1) name_parts |> String.concat " "
  in
  problem_name, problem_number, f
;;

let problem_files =
  let problem_files = Sys.readdir "./problems" in
  problem_files
  |> Array.to_seq
  |> Seq.drop_while (fun f -> f = "dune")
  |> Seq.map format_file_name
  |> List.of_seq
  |> List.sort (fun (_, num1, _) (_, num2, _) -> num1 - num2)
  |> List.map (fun (name, num, f_name) ->
    Printf.sprintf "- `%d` [%s](./problems/%s)" num name f_name)
;;

let () =
  let problem_content = problem_files |> String.concat "\n" in
  let readme_file = open_out "./README.md" in
  Printf.fprintf readme_file "%s\n" problem_content;
  close_out readme_file
;;
