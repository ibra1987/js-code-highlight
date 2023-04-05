export default function applyBasicStyle(code_containers_arr) {
  if (!code_containers_arr) return;

  code_containers_arr.map((element) =>
    element.classList.add("code_container_basic")
  );
}
