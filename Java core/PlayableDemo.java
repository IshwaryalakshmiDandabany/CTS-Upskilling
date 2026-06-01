interface Playable {
    void play();
}

class Guitar implements Playable {
    @Override
    public void play() {
        System.out.println("Playing Guitar");
    }
}

class Piano implements Playable {
    @Override
    public void play() {
        System.out.println("Playing Piano");
    }
}

public class PlayableDemo {
    public static void main(String[] args) {
        Playable p1 = new Guitar();
        Playable p2 = new Piano();

        p1.play();
        p2.play();
    }
}

