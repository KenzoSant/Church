<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- ========== CSS ========== -->
    <link rel="stylesheet" href="../assets/css/index.css">
    <link rel="stylesheet" href="../styles.css">

    <title>Home</title>
</head>

<body>
    <?php include("../../src/components/header_footer.php"); ?>
    <main>
        <!-- ========== HOME ========== -->
        <section class="home section" id="home">
            <div class="home-data">
                <div class="home-container">
                    <div class="home-title">
                        <h2 class="section-title-name">Evangelho Eterno</h2>
                        <h2 class="section-title-name-null">Church</h2>
                    </div>
                    <div class="home-button">
                        <a href="#options"><button class="btn">Sobre</button></a>
                        <a href="#carousel"><button class="btn">Informativo</button></a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php include("../../src/components/options.php"); ?>
    <?php include("../../src/components/carousel.php"); ?>
    <?php include("../../src/components/footer.php"); ?>

    <button id="scrollToTopBtn" class="scroll-to-top-btn"><img src="../assets/img/arrow.png" alt=""></button>

    <script src="../assets/js/index.js"></script>
</body>

</html>
