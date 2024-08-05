<script setup lang="ts">
</script>

<template>    
    <div class="modal-window">
        <label>
            Ваш город - <strong>Санкт-Петербург</strong>?
        </label>
        <div class="modal-window__buttons">
            <button class="modal-window__buttons__yes-button">Да</button>
            <button class="modal-window__buttons__change-button">Сменить город</button>
        </div>
    </div>
</template>

<style scoped>
.modal-window {
    position: absolute;
    top: 3.7em;
    right: 12.5em;
    height: 4em;
    background: var(--white);
    border-radius: 8px;
    padding: 1.5em;
    box-shadow: 1px 0px 30px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: 50% 50%;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    visibility: hidden;
}

.modal-window::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--white);
}

.modal-window__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    width: 100%;
}

button {
    padding: 0.5em 1em;
    border-radius: 5px;
    border: 2px solid var(--green);
    font-family: 'Geometria', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
}

.modal-window__buttons__yes-button {
    background-color: var(--green);
    color: var(--white);
    width: 6em;
}

.modal-window__buttons__change-button {
    background-color: var(--white);
    color: var(--green);
    width: 10.5em;
}

button:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

button:focus {
  box-shadow: 0 0 3px 3px rgba(0, 211, 109, 0.3);
}

button:active {
  background-color: var(--green);
  color: var(--white);
  border-color: var(--green);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}
</style>
  