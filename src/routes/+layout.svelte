<script lang="ts">
    import "../app.css";
    import { user, userData } from "$lib/firebase";
    interface Props {
       children?: import('svelte').Snippet;
    }
 
    let { children }: Props = $props();
    $user;
    $userData;
 </script>
 
 
 <div class="min-h-screen flex flex-col">
     {@render children?.()}
 </div>