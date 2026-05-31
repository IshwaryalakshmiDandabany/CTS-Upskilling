class Animal {

    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {

    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}

public class AnimalDogDemo {
    public static void main(String[] args) {
        Animal a = new Animal();
        Animal d = new Dog();

        a.makeSound();
        d.makeSound();
    }
}

